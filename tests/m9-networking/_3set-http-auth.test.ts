import { expect, test } from "@playwright/test";

/**
 * TODO:
 * 1. Create repo via web API
 * 2. Go to UI and check if it exists
 */

const REPO = "Playwright-Test-Repo";
test.use({
  baseURL: "https://api.github.com/",
  extraHTTPHeaders: {
    Accept: "application/vnd.github.v3+json",
    Authorization: `token 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`,
  },
});

test.beforeEach("Create Repo", async ({ request }) => {
  const response = await request.post("user/repos", {
    data: {
      name: REPO,
    },
  });

  expect(response.ok()).toBeTruthy();
});

test("Wrok with new created repo", async ({ page }) => {
  await page.goto("https://github.com/Cornerstone-04/?tab=repositories");
  await expect(page.getByRole("link", { name: REPO })).toHaveCount(1);

  //   other actions
});

test.afterEach("Delete repo", async ({ request }) => {
  const response = await request.delete(`repos/Cornerstone-04/${REPO}`, {});
  expect(response.ok()).toBeTruthy();
  expect(response.status()).toEqual(204);
});
