import { SHARE_QUOTES } from "@/data/sharing/shareQuotes";
import { pickIndex } from "@/lib/narrative/seed";

const MAX_LEN = 140;

export function selectShareQuote(championId: string, seed: string): string {
  const pool = SHARE_QUOTES[championId];
  if (!pool?.length) {
    return "Runeterra holds many names. One of them may be yours.";
  }
  const raw = pool[pickIndex(seed, "share-quote", pool.length)];
  const trimmed = raw.trim();
  if (trimmed.length <= MAX_LEN) return trimmed;
  const cut = trimmed.slice(0, MAX_LEN - 1);
  const lastSpace = cut.lastIndexOf(" ");
  return (lastSpace > 40 ? cut.slice(0, lastSpace) : cut).trim() + ".";
}
