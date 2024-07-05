import { expect, test } from "@playwright/test";

test("Recording with HAR (browserContext)", async ({ browser }) => {
  // Create a new browser context
  const context = await browser.newContext();

  // Apply routeFromHAR to the browser context
  await context.routeFromHAR("./hars/credit/credit_association.har", {
    update: true,
  });

  // Create a new page from the context
  const page = await context.newPage();

  // Go to the page
  await page.goto("");

  // Assert that the text is visible
  await expect(page.getByText("Register to become a member")).toBeVisible();

  // Close the context
  await context.close();
});

test("Recording with HAR (page)", async ({ page }) => {
  // Get the response from the HAR file
  await page.routeFromHAR("./hars/savings/savings.har", {
    update: true,
  });

  // Go to the page
  await page.goto("/savings.html");

  // Assert that the fruit is visible
  await expect(page.getByText("Download")).toBeVisible();
});

test("Replay from HAR", async ({ page }) => {
  // Replay API requests from HAR.
  // Either use a matching response from the HAR,
  // or abort the request if nothing matches.
  await page.routeFromHAR("./hars/savings/savings.har", {
    update: false,
  });

  // Go to the page
  await page.goto("/savings.html");

  // Assert that the Playwright fruit is visible
  await expect(page.getByText("Download")).toBeVisible();
});
