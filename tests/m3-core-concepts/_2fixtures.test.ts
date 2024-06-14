import { test, chromium } from "playwright/test";

// built-in fixtures for UI testing
test("Test with Page Fixtures", async ({ page }) => {
  await page.goto("https://playwright.dev/");
  console.log("Text Content: ", await page.title());
});

// playwright provides fixtures for browser, page, and context.
test("Other fixtures", async ({ browserName, browser, context, page }) => {
  await context.newPage();
  console.log("Browser Name: ", browserName);
  console.log("Browser Version: ", browser.version());
  console.log("Page URL: ", page.url());
});
