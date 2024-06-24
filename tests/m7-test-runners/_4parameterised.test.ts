import { test } from "@playwright/test";

const people = ["Alice", "John"];

for (const name of people) {
  test(`Test ${name}`, async () => {
    console.log(name);
  });
}
