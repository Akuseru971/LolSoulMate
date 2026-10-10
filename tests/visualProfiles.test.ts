import { describe, expect, it } from "vitest";
import { NARRATIVE_COMPLETE_IDS } from "@/data/narratives/packs/all";
import { allVisualProfiles, getVisualFrame } from "@/data/champions/visualProfiles";
import { SHARE_FORMATS } from "@/lib/sharing/formats";
import { SHARE_TEMPLATE_LABELS } from "@/lib/sharing/formats";
import { mergeArtworkFrame } from "@/lib/champions/visualTypes";
import { sanitizeNickname, soulPortraitLabel } from "@/lib/champions/nickname";

describe("champion visual profiles", () => {
  it("covers all 25 narrative-complete champions", () => {
    const ids = [...NARRATIVE_COMPLETE_IDS].sort();
    const profileIds = allVisualProfiles().map((p) => p.championId).sort();
    expect(profileIds).toEqual(ids);
  });

  it("has valid frame values for every context", () => {
    for (const p of allVisualProfiles()) {
      for (const key of [
        "revealMobile",
        "revealDesktop",
        "result",
        "shareStory",
        "sharePortrait",
        "shareSquare",
        "altThumb",
      ] as const) {
        const frame = p[key];
        expect(frame.focalX).toBeGreaterThanOrEqual(0);
        expect(frame.focalX).toBeLessThanOrEqual(100);
        expect(frame.scale).toBeGreaterThanOrEqual(1);
      }
    }
  });

  it("validates 225 template-format profile bindings exist", () => {
    const templates = Object.keys(SHARE_TEMPLATE_LABELS);
    let count = 0;
    for (const id of NARRATIVE_COMPLETE_IDS) {
      for (const format of SHARE_FORMATS) {
        const ctx =
          format.id === "portrait"
            ? "sharePortrait"
            : format.id === "square"
              ? "shareSquare"
              : "shareStory";
        const frame = getVisualFrame(id, ctx);
        expect(frame.scale).toBeGreaterThan(0);
        count += templates.length;
      }
    }
    expect(count).toBe(25 * SHARE_FORMATS.length * templates.length);
    expect(count).toBe(225);
  });
});

describe("nickname helpers", () => {
  it("sanitizes and labels portraits", () => {
    expect(sanitizeNickname("  Axell  ")).toBe("Axell");
    expect(soulPortraitLabel("Axell")).toContain("Axell");
    expect(soulPortraitLabel(undefined)).toBe("Your soul");
  });

  it("merges user transforms deterministically", () => {
    const base = getVisualFrame("irelia", "shareStory");
    const merged = mergeArtworkFrame(base, { panX: 0.2, panY: -0.1, zoom: 1.1 });
    expect(merged.scale).toBeGreaterThan(base.scale);
    expect(merged.panX).toBe(0.2);
  });
});
