import { expect, test } from "playwright/test";

const homeTitle = "Credit Association";
const savingsTitle = "Save with us";

test("Back, forward, reload, test", async ({ page }) => {
  await page.goto("/");
  await page.goto("/savings.html");
  await expect(page).toHaveTitle(savingsTitle);

  //   navigate backward by one page
  await page.goBack();
  await expect(page).toHaveTitle(homeTitle);
  //   navigate forward by one page
  await page.goForward();
  await expect(page).toHaveTitle(savingsTitle);
  //   reload page
  await page.reload();
  await expect(page).toHaveTitle(savingsTitle);
});

test("Navigation test", async ({ page }) => {
  await page.goto("/", { waitUntil: "load" });
  await expect(page).toHaveTitle(homeTitle);
});

test("Load while navigating", async ({ page }) => {
  await page.goto("/savings-html");
  await expect(page).toHaveTitle(savingsTitle);
  await page.goBack();
  await expect(page).toHaveTitle(homeTitle);
  await page.goForward();
  await expect(page).toHaveTitle(savingsTitle);
  await page.reload();
  await expect(page).toHaveTitle(savingsTitle);
});
