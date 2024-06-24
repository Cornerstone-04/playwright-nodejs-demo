import { test } from "@playwright/test";

test.describe("Feature A Group", () => {
  test("Test A.1", async ({ page }) => {
    await page.goto("");
    console.log("Test A.1");
  });
  test("Test A.2", async ({ page }) => {
    await page.goto("");
    console.log("Test A.2");
  });
});

test.describe("Feature B", () => {
  test("Test B.1", async ({ page }) => {
    await page.goto("");
    console.log("Test B.1");
  });
  test("Test B.2", async ({ page }) => {
    await page.goto("");
    console.log("Test B.2");
  });
});
