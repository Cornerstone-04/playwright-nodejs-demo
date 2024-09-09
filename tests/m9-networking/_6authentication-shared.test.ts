import { test, expect } from "@playwright/test";
import path from "path";

// Path to the authentication file
const authFile = path.join(__dirname, "../../playwright/.auth/user.json");

// Load authentication state from user.json and use it in subsequent tests
test.use({ storageState: authFile });

test.describe("Authenticated Tests", () => {
  // Example test to check if the user is logged in
  test("should be logged in and view profile", async ({ page }) => {
    // Navigate to GitHub
    await page.goto("https://github.com/");

    // Check if the profile button is visible, indicating the user is logged in
    await expect(
      page.getByRole("button", { name: "View profile and more" })
    ).toBeVisible();
  });

  // Add more tests that require authentication below
  test("should access another page as authenticated user", async ({ page }) => {
    await page.goto("https://github.com/settings/profile");

    // Check if you are on the profile settings page
    await expect(page).toHaveURL("https://github.com/settings/profile");
    await expect(page.locator("h2")).toContainText("Public profile");
  });
});