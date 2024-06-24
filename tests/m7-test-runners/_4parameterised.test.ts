import { expect, test } from "@playwright/test";

const people = ["Alice", "John"];

for (const name of people) {
  test(`Test ${name}`, async () => {
    console.log(name);
  });
}

const map1 = new Map();
map1.set(2, 20);
map1.set(3, 30);

for (const [key, value] of map1) {
  test(`Testing 10x function with ${key} and ${value}`, async () => {
    expect(key * 10).toEqual(value);
  });
}

const inputs = [
  ["10", "6 months", "After 6 Months you will earn $0.20 on your deposit"],
  ["20", "1 Year", "After 1 Year you will earn $1.00 on your deposit"],
];

for (const [sum, period, result] of inputs) {
  test(`Testing deposit calculator with ${sum} and ${period}`, async ({
    page,
  }) => {
    await page.goto("/savings.html");
    await page.getByTestId("deposit").fill(sum);
    await page.getByTestId("period").selectOption(period);
    await expect(page.getByTestId("result")).toHaveText(result);
  });
}
