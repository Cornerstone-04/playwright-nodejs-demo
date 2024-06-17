import { test } from "@playwright/test";

test("Filtering demo", async ({ page }) => {
  await page.goto("/savings.html");
  //   get all rows
  const rows = page.getByRole("row");
  console.log((await rows.count()) + " " + "rows");  
  //   filter for just one row
  const row = page.getByRole("row").filter({ hasText: "Competition" });
  console.log(await row.textContent());
  // filter for single cell
  const cell = page
    .getByRole("row")
    .filter({ hasText: "Competition" })
    .getByRole("cell")
    .nth(1);
  console.log(await cell.textContent());
});
