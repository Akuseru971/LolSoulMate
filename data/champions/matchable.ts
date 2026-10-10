import { CHAMPIONS } from "./profiles";
import type { ChampionProfile } from "./types";

/** Champions eligible for visitor-facing match results (full narrative packs). */
export function getMatchableChampions(): ChampionProfile[] {
  return CHAMPIONS.filter((c) => c.coverage === "narrative-complete");
}

export function getChampionCoverageStats() {
  const total = CHAMPIONS.length;
  const complete = CHAMPIONS.filter((c) => c.coverage === "narrative-complete").length;
  const vectorOnly = CHAMPIONS.filter((c) => c.coverage === "vector-only").length;
  const pending = CHAMPIONS.filter((c) => c.coverage === "pending-verification").length;
  return { total, complete, vectorOnly, pending };
}
