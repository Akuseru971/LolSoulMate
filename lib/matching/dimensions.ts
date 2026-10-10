export const PERSONALITY_DIMENSIONS = [
  "ambition",
  "empathy",
  "independence",
  "loyalty",
  "discipline",
  "impulsivity",
  "idealism",
  "pragmatism",
  "emotionalOpenness",
  "resilience",
  "desireForRecognition",
  "protectiveInstinct",
  "leadershipTendency",
  "moralFlexibility",
  "needForControl",
  "relationshipWithDestiny",
] as const;

export type PersonalityDimension = (typeof PERSONALITY_DIMENSIONS)[number];

export type PersonalityVector = Record<PersonalityDimension, number>;

export function emptyVector(): PersonalityVector {
  return PERSONALITY_DIMENSIONS.reduce((acc, dim) => {
    acc[dim] = 0;
    return acc;
  }, {} as PersonalityVector);
}

export function cloneVector(v: PersonalityVector): PersonalityVector {
  return { ...v };
}

/** Partial weights from a single answer; values typically 0–1 strength. */
export type DimensionWeights = Partial<Record<PersonalityDimension, number>>;
