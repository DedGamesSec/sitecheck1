import * as Astronomy from "astronomy-engine";
import * as satellite from "satellite.js";
import { REAL_STARS } from "../data/realStarCatalog";
import { getRussianName } from "../data/starNamesRu";

export interface SmallBodyDef {
  id: string;
  nameEn: string;
  type: "COMET" | "ASTEROID";
  // Orbital elements
  a: number;   // semi-major axis (AU)
  e: number;   // eccentricity
  iDeg: number; // inclination (deg)
  OmegaDeg: number; // longitude of ascending node (deg)
  omegaDeg: number; // argument of perihelion (deg)
  M0Deg: number; // mean anomaly at epoch J2000 (deg)
  periodYears: number; // orbital period in years
}

export const SMALL_BODIES: SmallBodyDef[] = [
  {
    id: "ceres",
    nameEn: "1 Ceres",
    type: "ASTEROID",
    a: 2.769,
    e: 0.0758,
    iDeg: 10.59,
    OmegaDeg: 80.31,
    omegaDeg: 73.6,
    M0Deg: 153.9,
    periodYears: 4.60
  },
  {
    id: "vesta",
    nameEn: "4 Vesta",
    type: "ASTEROID",
    a: 2.362,
    e: 0.0887,
    iDeg: 7.14,
    OmegaDeg: 103.85,
    omegaDeg: 151.2,
    M0Deg: 20.86,
    periodYears: 3.63
  },
  {
    id: "pallas",
    nameEn: "2 Pallas",
    type: "ASTEROID",
    a: 2.772,
    e: 0.231,
    iDeg: 34.84,
    OmegaDeg: 173.08,
    omegaDeg: 310.04,
    M0Deg: 53.2,
    periodYears: 4.62
  },
  {
    id: "halley",
    nameEn: "1P/Halley",
    type: "COMET",
    a: 17.834,
    e: 0.9671,
    iDeg: 162.26,
    OmegaDeg: 58.42,
    omegaDeg: 111.33,
    M0Deg: 38.0,
    periodYears: 75.32
  },
  {
    id: "neowise",
    nameEn: "C/2020 F3 (NEOWISE)",
    type: "COMET",
    a: 360.0,
    e: 0.9992,
    iDeg: 128.9,
    OmegaDeg: 61.0,
    omegaDeg: 37.0,
    M0Deg: 0.1,
    periodYears: 6766.0
  },
  {
    id: "eros",
    nameEn: "433 Eros",
    type: "ASTEROID",
    a: 1.458,
    e: 0.2229,
    iDeg: 10.83,
    OmegaDeg: 304.3,
    omegaDeg: 178.9,
    M0Deg: 180.5,
    periodYears: 1.76
  },
  {
    id: "apophis",
    nameEn: "99942 Apophis",
    type: "ASTEROID",
    a: 0.922,
    e: 0.1912,
    iDeg: 3.34,
    OmegaDeg: 204.0,
    omegaDeg: 126.4,
    M0Deg: 215.5,
    periodYears: 0.89
  },
  {
    id: "encke",
    nameEn: "2P/Encke",
    type: "COMET",
    a: 2.215,
    e: 0.8483,
    iDeg: 11.78,
    OmegaDeg: 334.56,
    omegaDeg: 186.55,
    M0Deg: 170.1,
    periodYears: 3.30
  },
  {
    id: "juno",
    nameEn: "3 Juno",
    type: "ASTEROID",
    a: 2.670,
    e: 0.2562,
    iDeg: 12.98,
    OmegaDeg: 169.85,
    omegaDeg: 248.4,
    M0Deg: 40.2,
    periodYears: 4.36
  },
  {
    id: "psyche",
    nameEn: "16 Psyche",
    type: "ASTEROID",
    a: 2.923,
    e: 0.134,
    iDeg: 3.09,
    OmegaDeg: 150.3,
    omegaDeg: 228.1,
    M0Deg: 285.3,
    periodYears: 4.99
  }
];

const SMALL_BODY_TARGETS = [
  { query: "1", fallbackId: "ceres", nameEn: "1 Ceres", type: "ASTEROID" as const },
  { query: "4", fallbackId: "vesta", nameEn: "4 Vesta", type: "ASTEROID" as const },
  { query: "2", fallbackId: "pallas", nameEn: "2 Pallas", type: "ASTEROID" as const },
  { query: "1P", fallbackId: "halley", nameEn: "1P/Halley", type: "COMET" as const },
  { query: "C/2020 F3", fallbackId: "neowise", nameEn: "C/2020 F3 (NEOWISE)", type: "COMET" as const },
  { query: "433", fallbackId: "eros", nameEn: "433 Eros", type: "ASTEROID" as const },
  { query: "99942", fallbackId: "apophis", nameEn: "99942 Apophis", type: "ASTEROID" as const },
  { query: "2P", fallbackId: "encke", nameEn: "2P/Encke", type: "COMET" as const },
  { query: "3", fallbackId: "juno", nameEn: "3 Juno", type: "ASTEROID" as const },
  { query: "16", fallbackId: "psyche", nameEn: "16 Psyche", type: "ASTEROID" as const },
];

/**
 * Fetches orbital elements from NASA JPL Small-Body Database API.
 * Uses rate-controlled fetching (max 4 concurrent) and falls back to static SMALL_BODIES on failure.
 */
export async function fetchSmallBodyElements(): Promise<SmallBodyDef[]> {
  const results: SmallBodyDef[] = [];
  const concurrency = 4;

  for (let i = 0; i < SMALL_BODY_TARGETS.length; i += concurrency) {
    const batch = SMALL_BODY_TARGETS.slice(i, i + concurrency);
    const batchPromises = batch.map(async (target) => {
      const fallback = SMALL_BODIES.find((b) => b.id === target.fallbackId) || SMALL_BODIES[0];
      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 4500);
        const res = await fetch(
          `https://ssd-api.jpl.nasa.gov/sbdb.api?sstr=${encodeURIComponent(target.query)}&discovery=false`,
          { signal: controller.signal }
        );
        clearTimeout(timeoutId);

        if (!res.ok) return fallback;
        const data = await res.json();
        const elements = data?.orbit?.elements;
        if (!Array.isArray(elements)) return fallback;

        const getVal = (name: string): number => {
          const el = elements.find((x: any) => x.name && x.name.toLowerCase() === name.toLowerCase());
          return el && el.value !== undefined ? parseFloat(el.value) : NaN;
        };

        const a = getVal("a");
        const e = getVal("e");
        const iDeg = getVal("i");
        const OmegaDeg = getVal("om");
        const omegaDeg = getVal("w");
        let M0Deg = getVal("ma");
        if (isNaN(M0Deg)) M0Deg = fallback.M0Deg;

        let periodYears = getVal("per_y");
        if (isNaN(periodYears)) {
          const per = getVal("per");
          if (!isNaN(per)) {
            // Check if period is in days
            periodYears = per > 100 ? per / 365.25 : per;
          } else {
            const n = getVal("n");
            if (!isNaN(n) && n > 0) {
              periodYears = 360 / (n * 365.25);
            } else if (!isNaN(a)) {
              periodYears = Math.pow(a, 1.5);
            }
          }
        }

        if (isNaN(a) || isNaN(e) || isNaN(iDeg) || isNaN(OmegaDeg) || isNaN(omegaDeg) || isNaN(periodYears)) {
          return fallback;
        }

        return {
          id: target.fallbackId,
          nameEn: data.object?.fullname?.trim() || target.nameEn,
          type: target.type,
          a,
          e,
          iDeg,
          OmegaDeg,
          omegaDeg,
          M0Deg,
          periodYears
        };
      } catch {
        return fallback;
      }
    });

    const batchResults = await Promise.all(batchPromises);
    results.push(...batchResults);
  }

  return results;
}

const DEG2RAD = Math.PI / 180;
const RAD2DEG = 180 / Math.PI;

/**
 * Solves Kepler's equation M = E - e*sin(E) iteratively
 */
function solveKepler(M: number, e: number): number {
  let E = M;
  for (let iter = 0; iter < 10; iter++) {
    const dE = (E - e * Math.sin(E) - M) / (1 - e * Math.cos(E));
    E -= dE;
    if (Math.abs(dE) < 1e-7) break;
  }
  return E;
}

/**
 * Calculates geocentric equatorial RA/Dec (J2000) for a small body
 */
export function calculateSmallBodyRaDec(body: SmallBodyDef, date: Date): { ra: number; dec: number } {
  const jd = Astronomy.MakeTime(date).tt + 2451545.0;
  const dtDays = jd - 2451545.0; // days since J2000.0

  // Mean motion (deg/day)
  const nDeg = 360 / (body.periodYears * 365.25);
  const M = ((body.M0Deg + nDeg * dtDays) % 360) * DEG2RAD;

  const E = solveKepler(M, body.e);
  const nu = 2 * Math.atan2(
    Math.sqrt(1 + body.e) * Math.sin(E / 2),
    Math.sqrt(1 - body.e) * Math.cos(E / 2)
  );
  const r = body.a * (1 - body.e * Math.cos(E));

  // Orbital plane position
  const xOrb = r * Math.cos(nu);
  const yOrb = r * Math.sin(nu);

  // Rotation angles
  const om = body.omegaDeg * DEG2RAD;
  const Om = body.OmegaDeg * DEG2RAD;
  const inc = body.iDeg * DEG2RAD;

  // Heliocentric ecliptic coordinates
  const xH = xOrb * (Math.cos(Om) * Math.cos(om) - Math.sin(Om) * Math.sin(om) * Math.cos(inc))
           - yOrb * (Math.cos(Om) * Math.sin(om) + Math.sin(Om) * Math.cos(om) * Math.cos(inc));
  const yH = xOrb * (Math.sin(Om) * Math.cos(om) + Math.cos(Om) * Math.sin(om) * Math.cos(inc))
           + yOrb * (-Math.sin(Om) * Math.sin(om) + Math.cos(Om) * Math.cos(om) * Math.cos(inc));
  const zH = xOrb * (Math.sin(om) * Math.sin(inc)) + yOrb * (Math.cos(om) * Math.sin(inc));

  // Convert heliocentric ecliptic to equatorial (rotate around X axis by obliquity ~23.439 deg)
  const eps = 23.439291 * DEG2RAD;
  const xEq = xH;
  const yEq = yH * Math.cos(eps) - zH * Math.sin(eps);
  const zEq = yH * Math.sin(eps) + zH * Math.cos(eps);

  // Get Earth position
  const earth = Astronomy.HelioVector(Astronomy.Body.Earth, date);
  const dx = xEq - earth.x;
  const dy = yEq - earth.y;
  const dz = zEq - earth.z;

  const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
  let raRad = Math.atan2(dy, dx);
  if (raRad < 0) raRad += 2 * Math.PI;
  const decRad = Math.asin(dz / dist);

  return {
    ra: raRad * RAD2DEG / 15, // Hours 0..24
    dec: decRad * RAD2DEG     // Degrees -90..90
  };
}

export interface LiveSatellite {
  id: string;
  name: string;
  satrec: satellite.SatRec;
  trail: { x: number; y: number }[];
}

/**
 * Parses TLE text from CelesTrak into usable SatRec objects
 */
export function parseTLEs(text: string): LiveSatellite[] {
  const lines = text.split("\n").map((l) => l.trim()).filter(Boolean);
  const sats: LiveSatellite[] = [];

  for (let i = 0; i < lines.length - 2; i++) {
    const line1 = lines[i + 1];
    const line2 = lines[i + 2];
    if (line1.startsWith("1 ") && line2.startsWith("2 ")) {
      const rawName = lines[i];
      try {
        const satrec = satellite.twoline2satrec(line1, line2);
        // Keep up to 200 brightest/visual satellites
        sats.push({
          id: `sat_${sats.length}`,
          name: rawName.replace(/\[.*\]/, "").trim(),
          satrec,
          trail: []
        });
        if (sats.length >= 200) break;
      } catch {
        // Skip invalid TLE
      }
      i += 2;
    }
  }
  return sats;
}

/**
 * Calculates Look Angles (Azimuth, Elevation) for a satellite at observer coordinates
 */
export function calculateSatLookAngles(
  satrec: satellite.SatRec,
  date: Date,
  latDeg: number,
  lonDeg: number
): { azimuth: number; altitude: number } | null {
  try {
    const posVel = satellite.propagate(satrec, date);
    if (!posVel.position || typeof posVel.position === "boolean") return null;

    const gmst = satellite.gstime(date);
    const gd = {
      longitude: lonDeg * DEG2RAD,
      latitude: latDeg * DEG2RAD,
      height: 0.05
    };

    const ecf = satellite.eciToEcf(posVel.position, gmst);
    const look = satellite.ecfToLookAngles(gd, ecf);

    return {
      azimuth: look.azimuth * RAD2DEG,
      altitude: look.elevation * RAD2DEG
    };
  } catch {
    return null;
  }
}

/**
 * Finds the constellation closest to the zenith above Moscow and formats the live status string.
 */
export function getLiveZenithConstellationStatus(now: Date = new Date(), lang: string = "ru"): string {
  const observer = new Astronomy.Observer(55.7558, 37.6173, 150);
  let maxAlt = -90;
  let bestConstellationCode = "UMA";

  for (let i = 0; i < REAL_STARS.length; i++) {
    const star = REAL_STARS[i];
    try {
      const horiz = Astronomy.Horizon(now, observer, star.ra, star.dec, "normal");
      if (horiz.altitude > maxAlt && star.constellationCode) {
        maxAlt = horiz.altitude;
        bestConstellationCode = star.constellationCode;
      }
    } catch {
      // ignore
    }
  }

  const isRu = lang === "ru";
  const constellationName = isRu ? getRussianName(bestConstellationCode) : bestConstellationCode;
  const timeStr = new Intl.DateTimeFormat(isRu ? "ru-RU" : "en-GB", {
    timeZone: "Europe/Moscow",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false
  }).format(now);

  const prefixMap: Record<string, string> = {
    ru: "НЕБО",
    en: "SKY",
    es: "CIELO",
    zh: "星空",
    tr: "GÖKYÜZÜ",
    hi: "आकाश",
    ar: "السماء",
    pt: "CÉU",
    fr: "CIEL",
    de: "HIMMEL",
    ja: "夜空"
  };
  const prefix = prefixMap[lang] || prefixMap.en;

  return `${prefix}: ${constellationName} // ${timeStr} ${isRu ? "MSK" : "GMT+3"}`;
}
