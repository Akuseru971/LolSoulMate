import type { PersonalityVector } from "@/lib/matching/dimensions";
import { PERSONALITY_DIMENSIONS } from "@/lib/matching/dimensions";
import type { ChampionCoverage, ChampionProfile } from "./types";
import { championSplashUrl } from "./splash";

function hashSpread(id: string, dim: string): number {
  let h = 0;
  const s = `${id}:${dim}`;
  for (let i = 0; i < s.length; i++) {
    h = (Math.imul(31, h) + s.charCodeAt(i)) >>> 0;
  }
  return 0.22 + (h % 58) / 100;
}

export function defineChampion(
  partial: Omit<
    ChampionProfile,
    "imageUrl" | "vector" | "loreHooks" | "coverage"
  > & {
    coverage?: ChampionCoverage;
    vector: Partial<PersonalityVector>;
    ddragonKey?: string;
    loreHooks: ChampionProfile["loreHooks"];
  },
): ChampionProfile {
  const vector = PERSONALITY_DIMENSIONS.reduce((acc, dim) => {
    acc[dim] = hashSpread(partial.id, dim);
    return acc;
  }, {} as PersonalityVector);
  Object.assign(vector, partial.vector);
  const { ddragonKey, ...rest } = partial;
  const key = ddragonKey ?? partial.id;
  return {
    ...rest,
    coverage: partial.coverage ?? "vector-only",
    imageUrl: championSplashUrl(key),
    vector,
  };
}
