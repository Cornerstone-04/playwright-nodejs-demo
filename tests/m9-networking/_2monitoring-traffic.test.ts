import { expect, test } from "@playwright/test";

test("Moitoring HTTP Traffic", async ({ page }) => {
  //   page.on("console", (msg) => {
  //     expect(msg.type()).not.toEqual("error");
  //   });
  page.on("request", (request) =>
    console.log(`req: ${request.method()} ${request.url()}`)
  );
  page.on("response", (response) =>
    console.log(`res: ${response.status()} ${response.url()}`)
  );

  await page.goto("");
});

test("Testing HTTP Traffic", async ({ page }) => {
  page.on("response", (response) => {
    expect
      .soft(
        response.status(),
        `Response status was ${response.status()} with URL: ${response.url()}`
      )
      .toBeLessThan(300);
  });
  await page.goto("");
});
