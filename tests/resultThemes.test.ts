import { describe, expect, it } from "vitest";
import { NARRATIVE_COMPLETE_IDS } from "@/data/narratives/packs/all";
import { getResultTheme, sceneAtmosphereScale } from "@/data/champions/resultThemes";

describe("champion result themes", () => {
  it("covers all narrative-complete champions", () => {
    for (const id of NARRATIVE_COMPLETE_IDS) {
      const theme = getResultTheme(id);
      expect(theme.championId).toBe(id);
      expect(theme.palette.background).toMatch(/^#/);
      expect(theme.atmosphere.intensity).toBeGreaterThan(0);
      expect(theme.atmosphere.intensity).toBeLessThanOrEqual(1);
    }
  });

  it("scales atmosphere by scroll scene", () => {
    expect(sceneAtmosphereScale("reveal")).toBeGreaterThan(sceneAtmosphereScale("legacy"));
    expect(sceneAtmosphereScale("inner")).toBeLessThan(sceneAtmosphereScale("connection"));
  });
});
