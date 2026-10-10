/** Twenty psychological dimensions aligned with the questionnaire model. */
export const PERSONALITY_DIMENSIONS = [
  "ambition",
  "loyalty",
  "empathy",
  "independence",
  "courage",
  "discipline",
  "impulsivity",
  "emotionalSensitivity",
  "desireForPower",
  "relationshipWithAuthority",
  "protectiveInstinct",
  "moralFlexibility",
  "idealism",
  "pragmatism",
  "resilience",
  "needForRecognition",
  "relationshipWithDestiny",
  "desireForFreedom",
  "socialConnection",
  "capacityForSacrifice",
] as const;

export type PersonalityDimension = (typeof PERSONALITY_DIMENSIONS)[number];

export type PersonalityVector = Record<PersonalityDimension, number>;

export const DIMENSION_LABELS: Record<PersonalityDimension, string> = {
  ambition: "Ambition",
  loyalty: "Loyalty",
  empathy: "Empathy",
  independence: "Independence",
  courage: "Courage",
  discipline: "Discipline",
  impulsivity: "Impulsivity",
  emotionalSensitivity: "Emotional sensitivity",
  desireForPower: "Desire for power",
  relationshipWithAuthority: "Relationship with authority",
  protectiveInstinct: "Protective instinct",
  moralFlexibility: "Moral flexibility",
  idealism: "Idealism",
  pragmatism: "Pragmatism",
  resilience: "Resilience",
  needForRecognition: "Need for recognition",
  relationshipWithDestiny: "Relationship with destiny",
  desireForFreedom: "Desire for freedom",
  socialConnection: "Social connection",
  capacityForSacrifice: "Capacity for sacrifice",
};

export function emptyVector(): PersonalityVector {
  return PERSONALITY_DIMENSIONS.reduce((acc, dim) => {
    acc[dim] = 0;
    return acc;
  }, {} as PersonalityVector);
}

export type DimensionWeights = Partial<Record<PersonalityDimension, number>>;

/** Scale vector to 0–100 for fragment thresholds and display. */
export function vectorToPercentScores(v: PersonalityVector): Record<PersonalityDimension, number> {
  const out = {} as Record<PersonalityDimension, number>;
  for (const dim of PERSONALITY_DIMENSIONS) {
    out[dim] = Math.round(Math.min(1, Math.max(0, v[dim])) * 100);
  }
  return out;
}
