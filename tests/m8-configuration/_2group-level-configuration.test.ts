import { test } from "@playwright/test";

// Types of groups
// 1. describe block group
// 2. all tests in a file

test.use({
  //geolocation, viewport, timezoneid, httpCredentials, baseURL, javaScriptEnabled, screenshot, video,...
  actionTimeout: 3000, // browser.newContext()
  navigationTimeout: 5000,
  launchOptions: { slowMo: 2000, headless: true }, // browserType.launch()
});

test("Test 1", async ({ page }) => {
  await page.goto("");
});

test.describe("Group Title", () => {
  test.use({});
  test("Test 2", async ({ page }) => {});
});
