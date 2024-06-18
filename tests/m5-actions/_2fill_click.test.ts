import { test, expect } from "@playwright/test";

test("Fill test", async ({ page }) => {
  await page.goto("/");
  await page.getByLabel("First name").fill("Cornerstone");
  //   international date standard is YYYY-MM-DD
  await page.getByLabel("Date of birth").fill("2004-04-17");
});

test("Click demo", async ({ page }) => {
  await page.goto("/");
  const button = page.getByRole("button", { name: "Register" });
  //   Ways to perform multiple clicks
  // 1. repeat the function call
  await button.click();
  await button.click();
  await button.click();
  //   2. for loop
  for (let i = 0; i < 5; i++) {
    await button.click();
  }
  //   clickcount parameter
  await button.click({ clickCount: 5 });
});
