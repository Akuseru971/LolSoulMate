/** Champion narrative packs — authored under data/narratives/champions/ */
import {
  CHAMPION_NARRATIVE_PACKS,
  NARRATIVE_COMPLETE_IDS,
} from "../champions/index";
import type { ChampionNarrativePack } from "../types";

export { NARRATIVE_COMPLETE_IDS };

export const NARRATIVE_PACKS: ChampionNarrativePack[] = CHAMPION_NARRATIVE_PACKS;

export function getNarrativePack(championId: string): ChampionNarrativePack | undefined {
  return NARRATIVE_PACKS.find((p) => p.championId === championId);
}
