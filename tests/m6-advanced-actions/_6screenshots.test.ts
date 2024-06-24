import { test, expect } from "@playwright/test";

test("Screenshot demo", async ({ page }) => {
  page.goto("/");
  await page.getByRole("button", { name: "Register" }).click();
  const screenshot: Promise<Buffer> = page.screenshot({
    path: "screenshots/screenshot-demo.png",
  });
  //   screenshot customisation
  page.screenshot({
    path: "screenshots/screenshot-custom.jpeg",
    fullPage: true,
    mask: await page.getByTestId("location").all(),
  });
  await expect(page.locator(".invalid-feedback")).toHaveCount(4); //correct count is 3
});
