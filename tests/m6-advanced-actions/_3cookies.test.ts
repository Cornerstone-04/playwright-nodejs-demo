import { test } from "@playwright/test";

test("Cookies", async ({ page }) => {
  await page.goto("/");
  //   grab cookies from context
  console.log(await page.context().cookies());

  //   add cookies
  await page.context().addCookies([
    {
      name: "Cookie1",
      value: "abc",
      url: "https://playwright.dev/",
    },
  ]);

  console.log(await page.context().cookies());
});
