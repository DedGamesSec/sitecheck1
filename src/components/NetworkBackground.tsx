import React, { useEffect, useRef, useState } from "react";
import * as Astronomy from "astronomy-engine";
import { REAL_STARS, CONSTELLATION_LINES, type RealStar } from "../data/realStarCatalog";
import { STAR_NAMES_RU, getRussianName } from "../data/starNamesRu";
import { getSkyLabel } from "../data/skyLabelsI18n";
import {
  SMALL_BODIES,
  calculateSmallBodyRaDec,
  calculateSatLookAngles,
  getLiveZenithConstellationStatus
} from "../utils/skyCalculations";
import { useSkyActivation, cachedSatellites, cachedSmallBodies } from "../hooks/useSkyActivation";

interface NetworkBackgroundProps {
  zoomFactor?: number;
  warpProgress?: number;
  isEcoMode?: boolean;
  ecoMode?: boolean; // alias compatibility
  onSkyStatusChange?: (status: string) => void;
  language?: string;
}

interface ProjectedObject {
  id: string;
  type: "STAR" | "PLANET" | "SATELLITE" | "COMET" | "ASTEROID";
  x: number;
  y: number;
  size: number;
  titleRu: string;
  subtitleRu?: string;
  techInfo?: string;
  constellationCode?: string;
}

export default function NetworkBackground({
  zoomFactor = 1.0,
  warpProgress = 0,
  isEcoMode,
  ecoMode,
  onSkyStatusChange,
  language = "ru"
}: NetworkBackgroundProps) {
  const activeEcoMode = isEcoMode ?? ecoMode ?? false;
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const reducedMotionMode = activeEcoMode || prefersReducedMotion;

  useSkyActivation(reducedMotionMode);
  const [hoveredItem, setHoveredItem] = useState<ProjectedObject | null>(null);
  const [tooltipPos, setTooltipPos] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  const projectedObjectsRef = useRef<ProjectedObject[]>([]);
  const hoveredConstellationRef = useRef<string | null>(null);
  const moonGlowMultiplierRef = useRef<number>(1.0);
  const sunAltitudeRef = useRef<number>(-20);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncPreference = () => setPrefersReducedMotion(mediaQuery.matches);

    syncPreference();
    mediaQuery.addEventListener("change", syncPreference);

    return () => {
      mediaQuery.removeEventListener("change", syncPreference);
    };
  }, []);

  // 1. Calculate Moon Phase Multiplier every 5 minutes (0.85 at new moon, 1.15 at full moon)
  useEffect(() => {
    const calcMoonPhase = () => {
      try {
        const phaseAngle = Astronomy.MoonPhase(new Date());
        moonGlowMultiplierRef.current = 0.85 + 0.3 * ((1 - Math.cos(phaseAngle * (Math.PI / 180))) / 2);
      } catch {
        moonGlowMultiplierRef.current = 1.0;
      }
    };
    calcMoonPhase();
    const interval = setInterval(calcMoonPhase, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  // 3. Update live zenith constellation status every 1 minute
  useEffect(() => {
    if (!onSkyStatusChange || reducedMotionMode) return;

    const updateSkyStatus = () => {
      try {
        const status = getLiveZenithConstellationStatus(new Date(), language);
        onSkyStatusChange(status);
      } catch {
        // ignore
      }
    };
    updateSkyStatus();
    const interval = setInterval(updateSkyStatus, 60000);
    return () => clearInterval(interval);
  }, [onSkyStatusChange, reducedMotionMode, language]);

  // Handle global mousemove for interactive Stellarium tooltips
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Avoid triggering tooltips if user is hovering over solid landing page or interactive buttons
      const targetElem = document.elementFromPoint(e.clientX, e.clientY);
      if (targetElem) {
        const closestLanding = targetElem.closest("#core-landing-page, #legal-modal-content");
        if (closestLanding) {
          if (hoveredConstellationRef.current !== null || hoveredItem !== null) {
            hoveredConstellationRef.current = null;
            setHoveredItem(null);
            document.body.style.cursor = "";
          }
          return;
        }
      }

      const objects = projectedObjectsRef.current;
      let found: ProjectedObject | null = null;
      let minDist = 16; // hover threshold in px

      for (let i = 0; i < objects.length; i++) {
        const obj = objects[i];
        const dx = e.clientX - obj.x;
        const dy = e.clientY - obj.y;
        const dist = Math.hypot(dx, dy);
        if (dist < minDist) {
          minDist = dist;
          found = obj;
        }
      }

      if (found) {
        hoveredConstellationRef.current = found.constellationCode || null;
        setHoveredItem(found);
        setTooltipPos({ x: e.clientX, y: e.clientY });
        document.body.style.cursor = "pointer";
      } else {
        if (hoveredConstellationRef.current !== null) {
          hoveredConstellationRef.current = null;
        }
        if (hoveredItem !== null) {
          setHoveredItem(null);
          document.body.style.cursor = "";
        }
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.body.style.cursor = "";
    };
  }, [hoveredItem]);

  // Main canvas animation and astronomical projection loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = window.innerWidth;
    let height = window.innerHeight;
    let pixelRatio = 1;
    let isMobile = width < 768;

    const syncCanvasSize = () => {
      if (!canvas) return;
      width = window.innerWidth;
      height = window.innerHeight;
      isMobile = width < 768;
      pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      canvas.width = Math.floor(width * pixelRatio);
      canvas.height = Math.floor(height * pixelRatio);
      ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    };

    const handleResize = () => {
      syncCanvasSize();
    };
    syncCanvasSize();
    window.addEventListener("resize", handleResize);

    // Throttle heavy astronomical computations to once every 250ms while rendering smoothly at 60fps
    let lastAstroCalcTime = 0;
    const astroCalcInterval = reducedMotionMode ? 2000 : 250;

    // Throttle slower moving objects (satellites & comets/asteroids) to every 750ms for performance with 200 satellites
    let lastSlowCalcTime = 0;
    const slowCalcInterval = reducedMotionMode ? 3000 : 750;
    let prevFrameTime = performance.now();

    // Projected coordinates cache for smooth interpolation
    interface StarCoord {
      star: RealStar;
      x: number;
      y: number;
      alt: number;
      size: number;
      alpha: number;
      centerDampen: number;
    }
    let currentStarCoords: StarCoord[] = [];

    interface PlanetCoord {
      id: string;
      nameRu: string;
      color: string;
      x: number;
      y: number;
      alt: number;
      size: number;
      centerDampen: number;
    }
    let currentPlanetCoords: PlanetCoord[] = [];

    interface BodyCoord {
      id: string;
      nameRu: string;
      type: "COMET" | "ASTEROID";
      x: number;
      y: number;
      alt: number;
      centerDampen: number;
    }
    let currentSmallBodyCoords: BodyCoord[] = [];

    interface SatCoord {
      id: string;
      nameRu: string;
      x: number;
      y: number;
      vx: number;
      vy: number;
      alt: number;
      az: number;
      centerDampen: number;
      trail: { x: number; y: number }[];
    }
    let currentSatCoords: SatCoord[] = [];

    const render = (time: number) => {
      const dt = Math.min(0.1, Math.max(0, (time - prevFrameTime) / 1000));
      prevFrameTime = time;

      ctx.clearRect(0, 0, width, height);
      const starDensity = reducedMotionMode ? 0.35 : isMobile ? 0.55 : 1;
      const starList = REAL_STARS.slice(0, Math.max(24, Math.floor(REAL_STARS.length * starDensity)));

      const moonGlow = moonGlowMultiplierRef.current;

      // 0. Horizon twilight glow if Sun altitude is between -6° and +6°
      const sunAlt = sunAltitudeRef.current;
      if (sunAlt >= -6 && sunAlt <= 6) {
        const twilightAlpha = 0.08 * (1 - Math.abs(sunAlt) / 6);
        if (twilightAlpha > 0.005) {
          ctx.save();
          const horizonH = Math.min(height * 0.4, 320);
          const grad = ctx.createLinearGradient(0, height - horizonH, 0, height);
          grad.addColorStop(0, "rgba(255, 180, 120, 0)");
          grad.addColorStop(1, `rgba(255, 180, 120, ${twilightAlpha.toFixed(4)})`);
          ctx.fillStyle = grad;
          ctx.fillRect(0, height - horizonH, width, horizonH);
          ctx.restore();
        }
      }

      const centerX = width / 2;
      const centerY = height / 2;
      const maxDist = Math.hypot(centerX, centerY);
      const isRu = language === "ru";

      // Fixed observer position (Moscow)
      const observerLat = 55.7558;
      const observerLon = 37.6173;
      const observer = new Astronomy.Observer(observerLat, observerLon, 0.05);

      // Simulated or real time: allow diurnal rotation to flow naturally
      const now = new Date();

      const projectionRadius = Math.max(width, height) * 0.58 * zoomFactor;

      // Recalculate astronomical positions if interval passed or empty
      if (time - lastAstroCalcTime > astroCalcInterval || currentStarCoords.length === 0) {
        lastAstroCalcTime = time;

        // 1. Stars projection
        const nextStarCoords: StarCoord[] = [];
        for (let i = 0; i < starList.length; i++) {
          const star = starList[i];
          try {
            const horiz = Astronomy.Horizon(now, observer, star.ra, star.dec, "normal");
            if (horiz.altitude > -15) {
              const r = ((90 - horiz.altitude) / 90) * projectionRadius;
              const theta = (horiz.azimuth - 90) * (Math.PI / 180);
              const x = centerX + r * Math.cos(theta);
              const y = centerY + r * Math.sin(theta);

              const distToCenter = Math.hypot(x - centerX, y - centerY);
              const centerDampen = Math.min(1, Math.max(0.2, (distToCenter / maxDist) * 1.55));

              const baseSize = Math.max(0.7, Math.min(3.0, 2.7 - star.mag * 0.42)) * zoomFactor;
              const size = isMobile ? baseSize * 1.15 : baseSize;
              let alpha = Math.min(1, Math.max(0.2, 1.15 - star.mag * 0.22));

              if (horiz.altitude < 5) {
                alpha *= Math.max(0, (horiz.altitude + 15) / 20);
              }

              nextStarCoords.push({
                star,
                x,
                y,
                alt: horiz.altitude,
                size,
                alpha,
                centerDampen
              });
            }
          } catch {
            // Ignore error for single star
          }
        }
        currentStarCoords = nextStarCoords;

        // 2. Planets & Sun / Moon projection
        const planets: { body: Astronomy.Body; id: string; nameRu: string; color: string; baseSize: number }[] = [
          { body: Astronomy.Body.Sun, id: "sun", nameRu: `${getSkyLabel("sun", language)} // ${getSkyLabel("sunDesc", language)}`, color: "#FEF08A", baseSize: 4.5 },
          { body: Astronomy.Body.Moon, id: "moon", nameRu: `${getSkyLabel("moon", language)} // ${getSkyLabel("moonDesc", language)}`, color: "#F3F4F6", baseSize: 4.0 },
          { body: Astronomy.Body.Venus, id: "venus", nameRu: `${getSkyLabel("venus", language)} // ${getSkyLabel("venusDesc", language)}`, color: "#FFFBEB", baseSize: 3.2 },
          { body: Astronomy.Body.Mars, id: "mars", nameRu: `${getSkyLabel("mars", language)} // ${getSkyLabel("marsDesc", language)}`, color: "#FF6B6B", baseSize: 2.6 },
          { body: Astronomy.Body.Jupiter, id: "jupiter", nameRu: `${getSkyLabel("jupiter", language)} // ${getSkyLabel("jupiterDesc", language)}`, color: "#FDE68A", baseSize: 3.0 },
          { body: Astronomy.Body.Saturn, id: "saturn", nameRu: `${getSkyLabel("saturn", language)} // ${getSkyLabel("saturnDesc", language)}`, color: "#FEF08A", baseSize: 2.5 }
        ];

        const nextPlanetCoords: PlanetCoord[] = [];
        for (const p of planets) {
          try {
            const eq = Astronomy.Equator(p.body, now, observer, true, true);
            const horiz = Astronomy.Horizon(now, observer, eq.ra, eq.dec, "normal");
            if (p.body === Astronomy.Body.Sun) {
              sunAltitudeRef.current = horiz.altitude;
            }
            if (horiz.altitude > -10) {
              const r = ((90 - horiz.altitude) / 90) * projectionRadius;
              const theta = (horiz.azimuth - 90) * (Math.PI / 180);
              const x = centerX + r * Math.cos(theta);
              const y = centerY + r * Math.sin(theta);
              const distToCenter = Math.hypot(x - centerX, y - centerY);
              const centerDampen = Math.min(1, Math.max(0.22, (distToCenter / maxDist) * 1.5));

              nextPlanetCoords.push({
                id: p.id,
                nameRu: p.nameRu,
                color: p.color,
                x,
                y,
                alt: horiz.altitude,
                size: p.baseSize * zoomFactor,
                centerDampen
              });
            }
          } catch {
            // Ignore
          }
        }
        currentPlanetCoords = nextPlanetCoords;
      }

      // Recalculate slower objects (Comets, Asteroids, Satellites) every 750ms
      if (time - lastSlowCalcTime > slowCalcInterval || currentSmallBodyCoords.length === 0 || (cachedSatellites && currentSatCoords.length === 0)) {
        lastSlowCalcTime = time;

        if (!reducedMotionMode) {
          // 3. Comets and Asteroids projection
          const nextSmallBodies: BodyCoord[] = [];
          const bodiesToUse = cachedSmallBodies && cachedSmallBodies.length > 0 ? cachedSmallBodies : SMALL_BODIES;
          const smallBodies = bodiesToUse.slice(0, isMobile ? Math.max(4, Math.floor(bodiesToUse.length * 0.45)) : bodiesToUse.length);
          for (const sb of smallBodies) {
            try {
              const eq = calculateSmallBodyRaDec(sb, now);
              const horiz = Astronomy.Horizon(now, observer, eq.ra, eq.dec, "normal");
              if (horiz.altitude > -8) {
                const r = ((90 - horiz.altitude) / 90) * projectionRadius;
                const theta = (horiz.azimuth - 90) * (Math.PI / 180);
                const x = centerX + r * Math.cos(theta);
                const y = centerY + r * Math.sin(theta);
                const distToCenter = Math.hypot(x - centerX, y - centerY);
                const centerDampen = Math.min(1, Math.max(0.2, (distToCenter / maxDist) * 1.5));

                nextSmallBodies.push({
                  id: sb.id,
                  nameRu: `${getRussianName(sb.nameEn, language)} // ${getSkyLabel(sb.type === "COMET" ? "comet" : "asteroid", language)}`,
                  type: sb.type,
                  x,
                  y,
                  alt: horiz.altitude,
                  centerDampen
                });
              }
            } catch {
              // Ignore
            }
          }
          currentSmallBodyCoords = nextSmallBodies;

          // 4. Satellites look angles calculation
          if (cachedSatellites && cachedSatellites.length > 0) {
            const nextSatCoords: SatCoord[] = [];
            const futureDate = new Date(now.getTime() + 750);

            const satellites = cachedSatellites.slice(0, isMobile ? Math.max(24, Math.floor(cachedSatellites.length * 0.35)) : cachedSatellites.length);
            for (let i = 0; i < satellites.length; i++) {
              const sat = satellites[i];
              const look = calculateSatLookAngles(sat.satrec, now, observerLat, observerLon);
              if (look && look.altitude > -2) {
                const r = ((90 - look.altitude) / 90) * projectionRadius;
                const theta = (look.azimuth - 90) * (Math.PI / 180);
                const x = centerX + r * Math.cos(theta);
                const y = centerY + r * Math.sin(theta);

                const distToCenter = Math.hypot(x - centerX, y - centerY);
                const centerDampen = Math.min(1, Math.max(0.2, (distToCenter / maxDist) * 1.5));

                let vx = 0;
                let vy = 0;
                const futureLook = calculateSatLookAngles(sat.satrec, futureDate, observerLat, observerLon);
                if (futureLook) {
                  const fr = ((90 - futureLook.altitude) / 90) * projectionRadius;
                  const fTheta = (futureLook.azimuth - 90) * (Math.PI / 180);
                  const fx = centerX + fr * Math.cos(fTheta);
                  const fy = centerY + fr * Math.sin(fTheta);
                  vx = (fx - x) / 0.75;
                  vy = (fy - y) / 0.75;
                }

                sat.trail.push({ x, y });
                if (sat.trail.length > 8) sat.trail.shift();

                nextSatCoords.push({
                  id: sat.id,
                  nameRu: getRussianName(sat.name, language),
                  x,
                  y,
                  vx,
                  vy,
                  alt: look.altitude,
                  az: look.azimuth,
                  centerDampen,
                  trail: [...sat.trail]
                });
              }
            }
            currentSatCoords = nextSatCoords;
          }
        }
      }

      // Build quick lookup map for star positions by ID for constellation line drawing
      const starMap = new Map<string, StarCoord>();
      const visibleInteractiveObjects: ProjectedObject[] = [];

      for (let i = 0; i < currentStarCoords.length; i++) {
        const sc = currentStarCoords[i];
        starMap.set(sc.star.id, sc);
        visibleInteractiveObjects.push({
          id: sc.star.id,
          type: "STAR",
          x: sc.x,
          y: sc.y,
          size: sc.size,
          titleRu: getRussianName(sc.star.nameEn || sc.star.id, language),
          subtitleRu: sc.star.constellationCode ? `${getSkyLabel("constellation", language)}: ${getRussianName(sc.star.constellationCode, language) || sc.star.constellationCode}` : undefined,
          techInfo: `${getSkyLabel("magnitude", language)}: ${sc.star.mag.toFixed(2)}m`,
          constellationCode: sc.star.constellationCode
        });
      }

      for (const p of currentPlanetCoords) {
        visibleInteractiveObjects.push({
          id: p.id,
          type: "PLANET",
          x: p.x,
          y: p.y,
          size: p.size,
          titleRu: p.nameRu,
          techInfo: `${getSkyLabel("altitude", language)}: ${p.alt.toFixed(1)}°`
        });
      }

      for (const sb of currentSmallBodyCoords) {
        visibleInteractiveObjects.push({
          id: sb.id,
          type: sb.type,
          x: sb.x,
          y: sb.y,
          size: 2.2,
          titleRu: sb.nameRu,
          techInfo: `${getSkyLabel("keplerianOrbitAlt", language)}: ${sb.alt.toFixed(1)}°`
        });
      }

      // DRAW CONSTELLATION ASTERISM LINES
      const activeConstel = hoveredConstellationRef.current;

      for (let i = 0; i < CONSTELLATION_LINES.length; i++) {
        const constel = CONSTELLATION_LINES[i];
        const isHighlighted = activeConstel === constel.code;

        ctx.save();
        if (isHighlighted) {
          ctx.strokeStyle = `rgba(46, 125, 255, ${(0.75 * moonGlow).toFixed(3)})`;
          ctx.lineWidth = 1.4;
          ctx.shadowColor = "#2E7DFF";
          ctx.shadowBlur = 8 * moonGlow;
        } else {
          ctx.strokeStyle = `rgba(180, 210, 255, ${(0.16 * moonGlow).toFixed(3)})`;
          ctx.lineWidth = 0.65;
        }

        for (let j = 0; j < constel.lines.length; j++) {
          const [id1, id2] = constel.lines[j];
          const s1 = starMap.get(id1);
          const s2 = starMap.get(id2);
          if (s1 && s2) {
            const avgDampen = isHighlighted ? 1 : (s1.centerDampen + s2.centerDampen) / 2;
            ctx.globalAlpha = avgDampen;
            ctx.beginPath();
            ctx.moveTo(s1.x, s1.y);
            ctx.lineTo(s2.x, s2.y);
            ctx.stroke();
          }
        }
        ctx.restore();
      }

      // DRAW STARS
      for (let i = 0; i < currentStarCoords.length; i++) {
        const sc = currentStarCoords[i];
        const isHovered = hoveredConstellationRef.current === sc.star.constellationCode;

        ctx.save();
        ctx.globalAlpha = sc.alpha * (isHovered ? 1 : sc.centerDampen);

        if (sc.star.mag < 1.0 || isHovered) {
          ctx.shadowColor = isHovered ? "#2E7DFF" : "rgba(180, 210, 255, 0.8)";
          ctx.shadowBlur = (isHovered ? 12 : 6) * moonGlow;
        }

        ctx.beginPath();
        ctx.arc(sc.x, sc.y, isHovered ? sc.size * 1.3 : sc.size, 0, Math.PI * 2);
        ctx.fillStyle = isHovered ? "#FFFFFF" : sc.star.mag < 0.5 ? "#F8FAFC" : "#E2E8F0";
        ctx.fill();
        ctx.restore();
      }

      // DRAW PLANETS & SUN/MOON
      for (const p of currentPlanetCoords) {
        ctx.save();
        ctx.globalAlpha = p.centerDampen;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 10 * moonGlow;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
        ctx.restore();
      }

      // DRAW COMETS & ASTEROIDS
      if (!reducedMotionMode) {
        for (const sb of currentSmallBodyCoords) {
          ctx.save();
          ctx.globalAlpha = sb.centerDampen;
          if (sb.type === "COMET") {
            // Draw glowing bluish tail pointing away from center/Sun
            const dx = sb.x - centerX;
            const dy = sb.y - centerY;
            const len = Math.hypot(dx, dy) || 1;
            const tailX = sb.x + (dx / len) * 16;
            const tailY = sb.y + (dy / len) * 16;

            const grad = ctx.createLinearGradient(sb.x, sb.y, tailX, tailY);
            grad.addColorStop(0, "rgba(125, 211, 252, 0.85)");
            grad.addColorStop(1, "rgba(56, 189, 248, 0)");

            ctx.beginPath();
            ctx.moveTo(sb.x, sb.y);
            ctx.lineTo(tailX, tailY);
            ctx.strokeStyle = grad;
            ctx.lineWidth = 2.5;
            ctx.stroke();

            // Comet head
            ctx.shadowColor = "#38BDF8";
            ctx.shadowBlur = 8 * moonGlow;
            ctx.beginPath();
            ctx.arc(sb.x, sb.y, 2.0, 0, Math.PI * 2);
            ctx.fillStyle = "#E0F2FE";
            ctx.fill();
          } else {
            // Asteroid dot
            ctx.beginPath();
            ctx.arc(sb.x, sb.y, 1.3, 0, Math.PI * 2);
            ctx.fillStyle = "#94A3B8";
            ctx.fill();
          }
          ctx.restore();
        }
      }

      // DRAW SATELLITES (if loaded and not eco mode)
      if (!reducedMotionMode && currentSatCoords.length > 0) {
        for (let i = 0; i < currentSatCoords.length; i++) {
          const sat = currentSatCoords[i];
          // Smooth 60fps interpolation using orbital velocity
          sat.x += sat.vx * dt;
          sat.y += sat.vy * dt;

          // Draw fading trail
          if (sat.trail.length > 1) {
            ctx.save();
            for (let tIdx = 0; tIdx < sat.trail.length - 1; tIdx++) {
              const p = (tIdx + 1) / sat.trail.length;
              const pNext = (tIdx + 2) / sat.trail.length;
              ctx.beginPath();
              ctx.moveTo(sat.trail[tIdx].x, sat.trail[tIdx].y);
              ctx.lineTo(sat.trail[tIdx + 1].x, sat.trail[tIdx + 1].y);
              ctx.strokeStyle = `rgba(255, 230, 180, ${pNext * 0.55 * sat.centerDampen})`;
              ctx.lineWidth = 1.2 * pNext;
              ctx.stroke();

              ctx.beginPath();
              ctx.arc(sat.trail[tIdx].x, sat.trail[tIdx].y, 1.2 * pNext, 0, Math.PI * 2);
              ctx.fillStyle = `rgba(255, 240, 210, ${p * 0.7 * sat.centerDampen})`;
              ctx.fill();
            }
            ctx.restore();
          }

          // Draw satellite dot with distinct warm white hue
          ctx.save();
          ctx.globalAlpha = sat.centerDampen;
          ctx.beginPath();
          ctx.arc(sat.x, sat.y, 2.2, 0, Math.PI * 2);
          ctx.fillStyle = "rgba(255, 250, 240, 1)"; // warm white
          ctx.shadowColor = "#FDE68A"; // warm gold/amber
          ctx.shadowBlur = 8 * moonGlow;
          ctx.fill();
          ctx.restore();

          visibleInteractiveObjects.push({
            id: sat.id,
            type: "SATELLITE",
            x: sat.x,
            y: sat.y,
            size: 2.5,
            titleRu: sat.nameRu,
            techInfo: `${getSkyLabel("orbit", language)}: ${sat.alt.toFixed(1)}° // ${getSkyLabel("az", language)}: ${sat.az.toFixed(0)}°`
          });
        }
      }

      projectedObjectsRef.current = visibleInteractiveObjects;

      if (!reducedMotionMode) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [zoomFactor, warpProgress, reducedMotionMode, language]);

  return (
    <div
      className="absolute inset-0 w-full h-full bg-[#0A0A0B] pointer-events-none overflow-hidden"
      id="network-background-container"
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full absolute inset-0 transition-opacity duration-700 pointer-events-none"
      />

      {/* Interactive Floating Tooltip */}
      {hoveredItem && (
        <div
          className="fixed z-50 px-3.5 py-2 rounded-xl bg-[#070709]/92 backdrop-blur-md border border-[#2E7DFF]/50 shadow-[0_0_25px_rgba(46,125,255,0.3)] text-[#F5F5F0] pointer-events-none transition-all duration-75 flex flex-col gap-0.5 animate-fade-in"
          style={{
            left: Math.min(window.innerWidth - 250, tooltipPos.x + 16),
            top: Math.max(16, Math.min(window.innerHeight - 90, tooltipPos.y - 14)),
          }}
          id="celestial-tooltip"
        >
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2E7DFF] animate-pulse" />
            <span className="font-mono text-xs font-bold text-[#2E7DFF] tracking-wider uppercase">
              {hoveredItem.titleRu}
            </span>
          </div>
          {hoveredItem.subtitleRu && (
            <span className="font-sans text-[11px] text-gray-300">
              {hoveredItem.subtitleRu}
            </span>
          )}
          {hoveredItem.techInfo && (
            <span className="font-mono text-[10px] text-gray-500">
              {hoveredItem.techInfo}
            </span>
          )}
        </div>
      )}
    </div>
  );
}
