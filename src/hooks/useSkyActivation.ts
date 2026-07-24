import { useEffect } from "react";
import { parseTLEs, fetchSmallBodyElements, SMALL_BODIES, type LiveSatellite, type SmallBodyDef } from "../utils/skyCalculations";

// Session-scoped cache for satellites and small bodies
export let cachedSatellites: LiveSatellite[] | null = null;
export let cachedSmallBodies: SmallBodyDef[] = SMALL_BODIES;
export let isFetchingTLEs = false;
export let isFetchingSmallBodies = false;

export function useSkyActivation(activeEcoMode: boolean = false) {
  useEffect(() => {
    if (activeEcoMode) return;

    if (cachedSatellites === null && !isFetchingTLEs) {
      isFetchingTLEs = true;
      const fetchTLEs = async () => {
        try {
          const controller = new AbortController();
          const timeoutId = setTimeout(() => controller.abort(), 6000);
          const res = await fetch(
            "https://celestrak.org/NORAD/elements/gp.php?GROUP=visual&FORMAT=tle",
            { signal: controller.signal }
          );
          clearTimeout(timeoutId);
          if (res.ok) {
            const text = await res.text();
            cachedSatellites = parseTLEs(text);
          } else {
            cachedSatellites = [];
          }
        } catch {
          cachedSatellites = [];
        }
        isFetchingTLEs = false;
      };
      fetchTLEs();
    }

    if (!isFetchingSmallBodies && cachedSmallBodies === SMALL_BODIES) {
      isFetchingSmallBodies = true;
      fetchSmallBodyElements().then((bodies) => {
        if (bodies && bodies.length > 0) {
          cachedSmallBodies = bodies;
        }
        isFetchingSmallBodies = false;
      }).catch(() => {
        isFetchingSmallBodies = false;
      });
    }
  }, [activeEcoMode]);

  return {
    cachedSatellites,
    cachedSmallBodies,
  };
}
