import { expect, test } from "@playwright/test";

const name = "Ajulu";

test("Storage - test from the UI POV", async ({ page }) => {
  await page.goto("/");
  const input = page.getByLabel("First name");
  await input.fill(name);
  await page.reload();
  await expect(input).toHaveValue("");

  await input.fill(name);
  await page.getByRole("button", { name: "Save Input" }).click();
  await page.reload();
  await expect(input).toHaveValue(name);
});

test("Local Storage ", async ({ page }) => {
  await page.goto("/");
  page.getByLabel("First name").fill(name);
  await page.getByRole("button", { name: "Save Input" }).click();

  const storage = await page.context().storageState();
  console.log(storage.cookies);
  console.log(storage.origins[0].localStorage);
});

test("Session Storage ", async ({ page }) => {
  await page.goto("/");
  const input = page.getByLabel("First name");
  input.fill(name);
  await page.getByRole("button", { name: "Save Input" }).click();

  // custom js using evaluate
  const storage = await page.evaluate(() => window.localStorage);
  console.log(storage);

  // clear
  await page.evaluate(() => window.localStorage.clear());
  await page.reload();
  await expect(input).toHaveValue("");

  //set
  await page.evaluate(setLocalStorage);
  await page.reload();
  await expect(input).toHaveValue("Ajulu");
});

function setLocalStorage() {
  window.localStorage.setItem("firstName", "Ajulu");
}
