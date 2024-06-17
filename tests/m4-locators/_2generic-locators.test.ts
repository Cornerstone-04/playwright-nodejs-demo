import { test, expect } from "@playwright/test";

test("Generic locators example", async ({ page }) => {
  await page.goto("/");
  await page
    .locator('.needs-validation label[for="firstName"]')
    .fill("Cornerstone");
  await page.locator("//form//button[2]").click();
  await expect(page.getByText("Valid last name is required")).toBeVisible();
});
