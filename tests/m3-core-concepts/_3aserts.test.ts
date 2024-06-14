import { test, expect } from "@playwright/test";

// assertions using expect
test("Simple assertions", async () => {
  expect("a").toEqual("a");
  expect(2).toBeLessThan(4);
  expect(null).toBeFalsy();
});

// web-first assertions with auto-retrying feature
test("Test with simple auto-retrying assertion", async ({ page }) => {
  await page.goto("http://localhost:3000");
  await expect(page.getByTestId("location")).toContainText("Lagos");
  await expect(page).toHaveTitle("Credit Association");
});
