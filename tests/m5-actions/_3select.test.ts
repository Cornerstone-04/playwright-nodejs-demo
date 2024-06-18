import { expect, test } from "@playwright/test";

test("Select test", async ({ page }) => {
  await page.goto("/savings.html");

  const deposit = page.getByTestId("deposit"),
    period = page.getByTestId("period"),
    result = page.getByTestId("result");

  await deposit.fill("100");
  await period.selectOption("6 Months");

  await expect(result).toContainText(
    "After 6 Months you will earn $2.00 on your deposit"
  );
  
  await period.selectOption({ label: "1 year" });
  await expect(result).toContainText(
    "After 1 Year you will earn $5.00 on your deposit"
  );
});
