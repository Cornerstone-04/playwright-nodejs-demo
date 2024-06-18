import { expect, test } from "playwright/test";

test("Check console", async ({ page }) => {
  //   register listener before carrying out action
  page.on("console", (message) => {
    console.log(message);
    expect.soft(message.type()).not.toEqual("error");
  });
  
  // use pagerror for uncaught errors
  page.on("pageerror", (error) => {
    console.log(`Found error: ${error.name}, ${error.message}`);
    expect.soft(error.name).not.toEqual("Error");
  });

  page.goto("/");
  await page.getByRole("button", { name: "Register" }).click();
});
