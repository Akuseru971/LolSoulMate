import type { ChampionProfile } from "@/data/champions/types";
import {
  DIMENSION_LABELS,
  PERSONALITY_DIMENSIONS,
  type PersonalityDimension,
  type PersonalityVector,
  vectorToPercentScores,
} from "./dimensions";

export function buildAlternativeInsight(
  userVector: PersonalityVector,
  alternative: ChampionProfile,
  primary: ChampionProfile,
): string {
  const user = vectorToPercentScores(userVector);
  const alt = vectorToPercentScores(alternative.vector);
  const pri = vectorToPercentScores(primary.vector);

  let closestDim: PersonalityDimension = "loyalty";
  let closestGap = Infinity;
  for (const d of PERSONALITY_DIMENSIONS) {
    const gap = Math.abs(user[d] - alt[d]);
    if (gap < closestGap) {
      closestGap = gap;
      closestDim = d;
    }
  }

  let contrastDim: PersonalityDimension = "independence";
  let bestContrast = -Infinity;
  for (const d of PERSONALITY_DIMENSIONS) {
    const altGap = Math.abs(user[d] - alt[d]);
    const priGap = Math.abs(user[d] - pri[d]);
    const contrast = altGap - priGap;
    if (contrast > bestContrast) {
      bestContrast = contrast;
      contrastDim = d;
    }
  }

  const shared = DIMENSION_LABELS[closestDim].toLowerCase();
  const nuance = DIMENSION_LABELS[contrastDim].toLowerCase();

  if (closestDim === contrastDim || bestContrast < 3) {
    return `${alternative.name} sits near your pattern on ${shared}, though ${primary.name} remains the closer match overall.`;
  }

  return `${alternative.name} shares your emphasis on ${shared}, while ${primary.name} reflects more of how you hold ${nuance}.`;
}
