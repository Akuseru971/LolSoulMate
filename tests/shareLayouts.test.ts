import { describe, expect, it } from "vitest";
import { SHARE_FORMATS, SHARE_TEMPLATE_LABELS } from "@/lib/sharing/formats";
import { getCardLayout, layoutKey } from "@/lib/sharing/layoutMetrics";

describe("share card layout metrics", () => {
  it("defines twelve template-format layout specs", () => {
    const templates = Object.keys(SHARE_TEMPLATE_LABELS);
    for (const template of templates) {
      for (const format of SHARE_FORMATS) {
        const spec = getCardLayout(
          template as keyof typeof SHARE_TEMPLATE_LABELS,
          format.id,
        );
        expect(spec.width).toBe(format.width);
        expect(spec.height).toBe(format.height);
        expect(spec.art.w).toBeGreaterThan(0);
        expect(spec.art.h).toBeGreaterThan(0);
        expect(spec.type.name).toBeGreaterThan(10);
        expect(layoutKey(template as "cinematic", format.id)).toContain(":");
      }
    }
    expect(templates.length * SHARE_FORMATS.length).toBe(12);
  });
});
