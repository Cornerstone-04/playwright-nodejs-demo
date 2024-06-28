import { expect, test } from "@playwright/test";

test("Route Abort", async ({ page }) => {
  page.route("**/*.{js}", (route) => route.abort());

  await page.goto("/savings.html");
  await page.getByTestId("deposit").fill("10");
  await expect(page.getByTestId("result")).not.toBeVisible();
});

test("Route with a condition", async ({ page }) => {
  await page.route("**/*", (route) => {
    if (route.request().resourceType() === "script") {
      route.abort();
    } else {
      route.continue();
    }
  });
});

test("Fulfill", async ({ page }) => {
  // used to mock an incoming response

  await page.route("**/*.pdf", (route) => {
    route.fulfill({
      status: 404,
      contentType: "text/plain",
      body: "Not Found",
      
    });
  });
  await page.goto("/savings.html");
  await page.getByText("Download our offer").click();
  await page.screenshot({ path: "route.png" });
  await page.waitForURL("**/*.pdf");
  const body = page.locator("body");
  await expect(body).toContainText("Not Found");
});
