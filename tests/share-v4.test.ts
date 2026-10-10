import { describe, expect, it } from "vitest";
import { buildSharePageMetadata } from "@/lib/sharing/shareMetadata";
import { buildAlternativeInsight } from "@/lib/matching/alternativeInsight";
import { selectShareQuote } from "@/lib/sharing/selectShareQuote";
import { getShareFormat, SHARE_FORMATS } from "@/lib/sharing/formats";
import { createSharePayload, encodeSharePayload } from "@/lib/sharing/payload";
import { getChampionById } from "@/data/champions";

describe("share metadata", () => {
  it("builds champion-specific title for valid payload", () => {
    const payload = createSharePayload({
      championId: "irelia",
      compatibility: 88,
      traitDimensions: ["loyalty", "discipline", "protectiveInstinct"],
      shareQuote: "Ionia remembers in motion.",
    });
    const d = encodeSharePayload(payload);
    const meta = buildSharePageMetadata(d);
    expect(meta.title).toContain("Irelia");
    expect(meta.openGraph?.images).toBeDefined();
  });

  it("uses safe fallback for invalid payload", () => {
    const meta = buildSharePageMetadata("not-valid!!!");
    expect(meta.title).toContain("Shared result");
  });
});

describe("alternative insights", () => {
  it("produces grounded comparison text", () => {
    const primary = getChampionById("irelia")!;
    const alt = getChampionById("yasuo")!;
    const text = buildAlternativeInsight(
      { ...primary.vector, independence: 0.9 },
      alt,
      primary,
    );
    expect(text).toContain("Yasuo");
    expect(text).toContain("Irelia");
  });
});

describe("share quotes", () => {
  it("selects deterministically from champion library", () => {
    const a = selectShareQuote("jhin", "seed-one");
    const b = selectShareQuote("jhin", "seed-one");
    const c = selectShareQuote("jhin", "seed-two");
    expect(a).toBe(b);
    expect(a.length).toBeLessThanOrEqual(140);
    expect(c.length).toBeGreaterThan(10);
  });
});

describe("share formats", () => {
  it("exposes four export dimensions with cinematic default", () => {
    expect(SHARE_FORMATS).toHaveLength(4);
    expect(SHARE_FORMATS[0].id).toBe("cinematic");
    expect(getShareFormat("cinematic")).toEqual({
      id: "cinematic",
      label: "Cinematic 16:9",
      width: 1920,
      height: 1080,
    });
    expect(getShareFormat("story")).toEqual({
      id: "story",
      label: "Story",
      width: 1080,
      height: 1920,
    });
    expect(getShareFormat("square").width).toBe(1080);
  });
});
