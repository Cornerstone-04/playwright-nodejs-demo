import { expect, test } from "@playwright/test";

test("Recommended built-in locators examples", async ({ page }) => {
  await page.goto("");

  //   1. get by label
  // you can assign to a locator to a variable in case of multiple use cases
  const firstName = page.getByLabel("First name");
  await firstName.fill("Cornerstone");
  await firstName.clear();
  // or chain the method in case of single use
  //   2.get by role
  await page.getByRole("button", { name: "Register", exact: true }).click();
  //   "exact" makes the locator case sensitive
  //   3. get by text
  const warning = page.getByText("Valid last name is required");
  await expect(warning).toBeVisible();
});
// TODO: read more locators in docs
