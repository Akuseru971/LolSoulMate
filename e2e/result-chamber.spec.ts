import { test, expect } from "@playwright/test";

const SPOTLIGHT = ["kindred", "jhin", "viego", "irelia", "braum"] as const;

test.describe("Soul Chamber spotlight", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/dev/result-chamber");
    await page.waitForLoadState("networkidle");
  });

  for (const id of SPOTLIGHT) {
    test(`renders ${id} chamber`, async ({ page }) => {
      const block = page.locator(`[data-testid="chamber-${id}"]`);
      await expect(block).toBeVisible();
      await expect(block.getByRole("heading", { level: 1 }).first()).toBeVisible();
      await expect(block.locator("img").first()).toBeVisible();
    });
  }
});
