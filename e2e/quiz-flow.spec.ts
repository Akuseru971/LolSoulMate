import { test, expect } from "@playwright/test";

test("visitor can start quiz and answer first question", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByText(/Every Soul Has a Legend/i)).toBeVisible({
    timeout: 15_000,
  });
  await page.getByRole("button", { name: /Discover Your Champion/i }).click();
  await page.getByRole("button", { name: /Begin questionnaire/i }).click();
  await expect(page.getByText(/Question 1 \/ 20/i)).toBeVisible();
  await page.getByRole("option").first().click();
  await page.getByRole("button", { name: /Continue/i }).click();
  await expect(page.getByText(/Question 2 \/ 20/i)).toBeVisible();
});
