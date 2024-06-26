import { test } from "@playwright/test";
test.use({ headless: false });

test("Global Test", async ({ page }) => {
  await page.goto("");
  await page.goBack();
  console.log("Test");
});
