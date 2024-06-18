import { expect, test } from "@playwright/test";

test("Check test", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveTitle("Credit Association");

  const checkbox = page.getByRole("checkbox");
  const textarea = page.locator("#textarea");
  const message = "Recommend by a friend";

  await expect(textarea).toBeDisabled();
  await expect(textarea).toBeEmpty();

  await checkbox.check();
  await expect(textarea).toBeEnabled();

  await textarea.fill(message);
  await expect(textarea).toHaveValue(message);

  await page.getByRole("button", { name: "Register" }).click();

  const feedback = page.locator(".invalid-feedback");
  await expect(feedback).toHaveCount(3);

  for (const message of await feedback.all()) {
    await expect(message).toBeVisible();
  }

  await expect(feedback.first()).toContainText("Valid first name is required");
});

test("Test with negating matchers", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByTestId("location")).not.toContainText("New York");
});
