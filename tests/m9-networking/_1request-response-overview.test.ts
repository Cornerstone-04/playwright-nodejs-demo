import { expect, test } from "@playwright/test";
import { request } from "http";

test("Request/Response Overview", async ({ page }) => {
  const response = await page.goto(""); //returns promise of a response
  if (response === null) return;
  console.log(response.url(), response.status(), response.ok());

  expect(response.ok()).toBeTruthy();
  // get all headers
  console.log(await response.allHeaders());
  console.log(await response.headersArray());
  // get body
  console.log(await response.body());
  console.log(await response.text());
  //   console.log(await response.json()); // error if payload is not parsable json
  const request = response.request();
  console.log(await request.allHeaders());
  console.log(request.method()); //GET
});

test("Request/ Response", async ({ request }) => {
  //pure API testing (no broswer instance)
  const response = await request.get("https://api.github.com/users/Cornerstone-04");
  console.log(response.ok());
  console.log(response.status());
  console.log(response.headersArray());
  console.log(await response.json());
});
