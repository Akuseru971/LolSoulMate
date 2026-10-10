import {
  emptyVector,
  PERSONALITY_DIMENSIONS,
  type PersonalityVector,
} from "./dimensions";

/** L2-normalize so answer patterns spread across champion space. */
export function normalizeUserVector(raw: PersonalityVector): PersonalityVector {
  const out = emptyVector();
  let sumSq = 0;
  for (const dim of PERSONALITY_DIMENSIONS) {
    sumSq += raw[dim] * raw[dim];
  }
  const norm = Math.sqrt(sumSq) || 1;
  for (const dim of PERSONALITY_DIMENSIONS) {
    out[dim] = raw[dim] / norm;
  }
  return out;
}

export function l2Normalize(vector: PersonalityVector): PersonalityVector {
  return normalizeUserVector(vector);
}

export function addWeighted(
  target: PersonalityVector,
  weights: Partial<Record<keyof PersonalityVector, number>>,
  multiplier = 1,
): void {
  for (const dim of PERSONALITY_DIMENSIONS) {
    const w = weights[dim];
    if (w !== undefined) {
      target[dim] += w * multiplier;
    }
  }
}
