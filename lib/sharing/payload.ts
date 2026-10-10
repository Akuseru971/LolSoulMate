import { z } from "zod";
import { getChampionById } from "@/data/champions";
import { PERSONALITY_DIMENSIONS, DIMENSION_LABELS } from "@/lib/matching/dimensions";
import type { PersonalityDimension } from "@/lib/matching/dimensions";
import { CONTENT_VERSION } from "@/lib/config/versions";
import { getMatchableChampions } from "@/data/champions/matchable";

const PAYLOAD_VERSION = 1;
const MAX_QUOTE_LEN = 140;

const dimensionEnum = z.enum(
  PERSONALITY_DIMENSIONS as unknown as [PersonalityDimension, ...PersonalityDimension[]],
);

export const sharePayloadSchema = z.object({
  v: z.literal(PAYLOAD_VERSION),
  cv: z.number().int().min(1).max(99).optional(),
  c: z
    .string()
    .min(1)
    .max(48)
    .regex(/^[a-z0-9_-]+$/),
  s: z.number().int().min(52).max(99),
  t: z.array(dimensionEnum).length(3),
  q: z.string().max(MAX_QUOTE_LEN),
});

export type SharePayload = z.infer<typeof sharePayloadSchema>;

const ALLOWED_CHAMPION_IDS = new Set(getMatchableChampions().map((c) => c.id));

export function encodeSharePayload(payload: SharePayload): string {
  const validated = sharePayloadSchema.parse(payload);
  if (!ALLOWED_CHAMPION_IDS.has(validated.c)) {
    throw new Error("Champion not shareable");
  }
  const json = JSON.stringify(validated);
  const b64 =
    typeof btoa !== "undefined"
      ? btoa(json)
      : Buffer.from(json, "utf8").toString("base64");
  return b64.replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

export function decodeSharePayload(encoded: string): SharePayload | null {
  try {
    if (!encoded || encoded.length > 512) return null;
    if (!/^[A-Za-z0-9_-]+$/.test(encoded)) return null;
    let b64 = encoded.replace(/-/g, "+").replace(/_/g, "/");
    while (b64.length % 4) b64 += "=";
    const json =
      typeof atob !== "undefined"
        ? atob(b64)
        : Buffer.from(b64, "base64").toString("utf8");
    if (json.length > 600) return null;
    const parsed = JSON.parse(json) as unknown;
    if (parsed === null || typeof parsed !== "object" || Array.isArray(parsed)) {
      return null;
    }
    const proto = Object.prototype;
    if (Object.getPrototypeOf(parsed) !== proto) return null;

    const result = sharePayloadSchema.safeParse(parsed);
    if (!result.success) return null;
    if (!ALLOWED_CHAMPION_IDS.has(result.data.c)) return null;
    const champion = getChampionById(result.data.c);
    if (!champion || champion.coverage !== "narrative-complete") return null;
    return result.data;
  } catch {
    return null;
  }
}

export function buildShareUrl(payload: SharePayload, siteUrl: string): string {
  const d = encodeSharePayload(payload);
  const base = siteUrl.replace(/\/$/, "");
  return `${base}/share?d=${d}`;
}

export function payloadToDisplay(payload: SharePayload) {
  const champion = getChampionById(payload.c);
  if (!champion) return null;
  return {
    champion,
    compatibility: payload.s,
    traits: payload.t.map((d) => DIMENSION_LABELS[d]),
    shareQuote: payload.q,
    contentVersion: payload.cv ?? CONTENT_VERSION,
  };
}

export function createSharePayload(input: {
  championId: string;
  compatibility: number;
  traitDimensions: PersonalityDimension[];
  shareQuote: string;
}): SharePayload {
  const quote = input.shareQuote.replace(/^["']|["']$/g, "").slice(0, MAX_QUOTE_LEN);
  return sharePayloadSchema.parse({
    v: PAYLOAD_VERSION,
    cv: CONTENT_VERSION,
    c: input.championId,
    s: input.compatibility,
    t: input.traitDimensions.slice(0, 3) as [PersonalityDimension, PersonalityDimension, PersonalityDimension],
    q: quote,
  });
}
