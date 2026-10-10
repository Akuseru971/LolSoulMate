import type { PersonalityDimension } from "@/lib/matching/dimensions";

export const ZODIAC_SIGNS = [
  "aries",
  "taurus",
  "gemini",
  "cancer",
  "leo",
  "virgo",
  "libra",
  "scorpio",
  "sagittarius",
  "capricorn",
  "aquarius",
  "pisces",
] as const;

export type ZodiacSign = (typeof ZODIAC_SIGNS)[number];

export const ZODIAC_LABELS: Record<ZodiacSign, string> = {
  aries: "Aries",
  taurus: "Taurus",
  gemini: "Gemini",
  cancer: "Cancer",
  leo: "Leo",
  virgo: "Virgo",
  libra: "Libra",
  scorpio: "Scorpio",
  sagittarius: "Sagittarius",
  capricorn: "Capricorn",
  aquarius: "Aquarius",
  pisces: "Pisces",
};

export function zodiacFromDate(month: number, day: number): ZodiacSign | null {
  if (month < 1 || month > 12 || day < 1 || day > 31) return null;
  const md = month * 100 + day;
  if (md >= 321 && md <= 419) return "aries";
  if (md >= 420 && md <= 520) return "taurus";
  if (md >= 521 && md <= 620) return "gemini";
  if (md >= 621 && md <= 722) return "cancer";
  if (md >= 723 && md <= 822) return "leo";
  if (md >= 823 && md <= 922) return "virgo";
  if (md >= 923 && md <= 1022) return "libra";
  if (md >= 1023 && md <= 1121) return "scorpio";
  if (md >= 1122 && md <= 1221) return "sagittarius";
  if (md >= 1222 || md <= 119) return "capricorn";
  if (md >= 120 && md <= 218) return "aquarius";
  if (md >= 219 && md <= 320) return "pisces";
  return null;
}

/** Symbolic storytelling nudge only — max 10% influence via engine blend. */
export function zodiacDimensionNudge(
  sign: ZodiacSign,
): Partial<Record<PersonalityDimension, number>> {
  const map: Record<ZodiacSign, Partial<Record<PersonalityDimension, number>>> =
    {
      aries: { ambition: 0.7, impulsivity: 0.65, leadershipTendency: 0.6 },
      taurus: { loyalty: 0.7, discipline: 0.65, resilience: 0.6 },
      gemini: { independence: 0.65, emotionalOpenness: 0.6, impulsivity: 0.55 },
      cancer: { empathy: 0.75, protectiveInstinct: 0.7, loyalty: 0.65 },
      leo: {
        desireForRecognition: 0.7,
        leadershipTendency: 0.65,
        resilience: 0.6,
      },
      virgo: { discipline: 0.75, pragmatism: 0.7, idealism: 0.45 },
      libra: { empathy: 0.65, idealism: 0.6, moralFlexibility: 0.5 },
      scorpio: {
        resilience: 0.7,
        loyalty: 0.65,
        relationshipWithDestiny: 0.6,
      },
      sagittarius: {
        independence: 0.7,
        idealism: 0.65,
        relationshipWithDestiny: 0.55,
      },
      capricorn: { ambition: 0.7, discipline: 0.7, pragmatism: 0.65 },
      aquarius: { independence: 0.75, idealism: 0.65, empathy: 0.55 },
      pisces: { empathy: 0.7, emotionalOpenness: 0.75, idealism: 0.6 },
    };
  return map[sign];
}
