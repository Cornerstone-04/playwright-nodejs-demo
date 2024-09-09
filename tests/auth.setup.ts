import { test as setup, expect } from "@playwright/test";
import path from "path";

const authFile = path.join(__dirname, "../playwright/.auth/user.json");

setup("authenticate", async ({ page }) => {
  // Perform authentication steps. Replace these actions with your own.
  await page.goto("https://github.com/login");
  await page.getByLabel("Username or email address").fill("Cornerstone-04");
  await page.getByLabel("Password").fill("ephraim1744");
  await page.locator('input[type="submit"]').click();
  // Wait until the page receives the cookies.

  //   Sometimes login flow sets cookies in the process of several redirects.
  //   Wait for the final URL to ensure that the cookies are actually set.
  await page.waitForURL("https://github.com/");
  // Alternatively, you can wait until the page reaches a state where all cookies are set.
  await expect(
    page.getByRole("heading", { name: "Top repositories" })
  ).toBeVisible();
  // End of authentication steps.

  // Take screenshot
  page.screenshot({
    path: "screenshots/auth-setup.jpeg",
    fullPage: true,
    mask: await page.getByTestId("location").all(),
  });
  await page.context().storageState({ path: authFile });
});
