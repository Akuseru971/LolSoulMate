import { describe, expect, it } from "vitest";
import { artworkStyle } from "@/components/champions/ChampionArtwork";
import { mergeArtworkFrame } from "@/lib/champions/visualTypes";
import { getShareFormat, SHARE_FORMATS } from "@/lib/sharing/formats";
import { shareContextForFormat } from "@/lib/champions/visualTypes";
import { getVisualFrame } from "@/data/champions/visualProfiles";

describe("full artwork mode", () => {
  it("ignores preset crop and user transform in full mode", () => {
    const base = getVisualFrame("irelia", "result");
    const merged = mergeArtworkFrame(
      base,
      { panX: 0.5, panY: -0.3, zoom: 1.25 },
      "full",
    );
    expect(merged.scale).toBe(1);
    expect(merged.focalX).toBe(50);
    expect(merged.panX).toBe(0);
    expect(artworkStyle(merged, "full").objectFit).toBe("contain");
  });

  it("uses cover and zoom in artistic crop mode", () => {
    const base = getVisualFrame("irelia", "result");
    const merged = mergeArtworkFrame(base, { panX: 0, panY: 0, zoom: 1.1 }, "artisticCrop");
    expect(merged.scale).toBeGreaterThan(base.scale);
    expect(artworkStyle(merged, "artisticCrop").objectFit).toBe("cover");
  });
});

describe("share formats", () => {
  it("defaults cinematic export to 1920×1080", () => {
    expect(SHARE_FORMATS[0].id).toBe("cinematic");
    const spec = getShareFormat("cinematic");
    expect(spec.width).toBe(1920);
    expect(spec.height).toBe(1080);
  });

  it("maps cinematic format to shareCinematic visual context", () => {
    expect(shareContextForFormat("cinematic")).toBe("shareCinematic");
    expect(getVisualFrame("jhin", "shareCinematic").scale).toBeGreaterThan(0);
  });
});
