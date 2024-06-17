import { test, expect } from "@playwright/test";

test("Multiple matches fails", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("link").click();
});

// perform actions on multiple matches by saving locator to constant
test("Multiple matches: first, last, nth", async ({ page }) => {
  await page.goto("/");
  const buttons = page.getByRole("button");

  console.log(
    await buttons.first().textContent(),
    await buttons.last().textContent(),
    await buttons.nth(1).textContent()
  );
});

test("Multiple matches: count or iterate", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("button", { name: "Register" }).click();

  const feedback = page.locator(".invalid-feedback");
  await expect(feedback).toHaveCount(3);

  for (const message of await feedback.all()) {
    console.log(`${await message.textContent()}`);
  }
});
