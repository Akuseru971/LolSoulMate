import { test, expect } from "@playwright/test";

const SPOTLIGHT = [
  ["kindred", "cinematic", "cinematic"],
  ["jhin", "soul", "story"],
  ["irelia", "legend", "portrait"],
  ["viego", "cinematic", "square"],
  ["braum", "soul", "cinematic"],
] as const;

test.describe("V7 share card spotlight", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/dev/share-gallery");
    await page.waitForLoadState("networkidle");
  });

  for (const [champ, template, format] of SPOTLIGHT) {
    test(`renders ${champ} ${template} ${format}`, async ({ page }) => {
      const card = page.locator(`[data-testid="card-${champ}-${template}-${format}"]`);
      await expect(card).toBeVisible();
      await expect(card.locator("img").first()).toBeVisible();
    });
  }
});
