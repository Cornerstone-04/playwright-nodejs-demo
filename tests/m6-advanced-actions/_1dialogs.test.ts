import { expect, test } from "@playwright/test";

// Define a constant for the name to be used in the test
const name = "Cornerstone";

test("Dialog test - Default is to dismiss", async ({ page }) => {
  // Navigate to the home page
  await page.goto("/");

  // Find the input field labeled "First name" and fill it with the predefined name
  const input = page.getByLabel("First name");
  await input.fill(name);

  // Verify that the input field contains the correct value
  await expect(input).toHaveValue(name);

  // Find and click the "Clear" button
  await page.getByRole("button", { name: "Clear" }).click();

  // Verify that the input field still contains the same value after clicking the "Clear" button
  // This seems counterintuitive as usually, a "Clear" button would clear the input field
  await expect(input).toHaveValue(name);
});

test("Dialog test- Ok or dismiss", async ({ page }) => {
  page.on("dialog", (dialog) => dialog.accept());
  //   page.once("dialog", (dialog) => dialog.accept()); - to invoke just once
  await page.goto("/");
  const input = page.getByLabel("First name");
  await input.fill(name);

  await page.getByRole("button", { name: "Clear" }).click();
  await expect(input).toHaveValue("");
});
