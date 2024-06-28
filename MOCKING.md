# API MOCKING IN PLAYWRIGHT

API mocking in Playwright allows you to intercept and modify network requests made by your application during test execution. This is useful for testing how your application handles different responses, simulating server conditions, or isolating your tests from external dependencies.

## Key Concepts and Steps

1. **Route Interception**: Playwright's `page.route` method allows you to intercept network requests based on URL patterns.
2. **Request Handling**: You can choose to fulfill, abort, or continue intercepted requests with modifications.

### Example of API Mocking

Here is a basic example demonstrating how to mock an API response:

1. **Intercepting and Mocking a Response**:

   ```javascript
   const { test, expect } = require("@playwright/test");

   test("API Mocking Example", async ({ page }) => {
     // Intercepting the API request and mocking the response
     await page.route("https://api.example.com/data", (route) => {
       route.fulfill({
         status: 200,
         contentType: "application/json",
         body: JSON.stringify({ key: "value" }),
       });
     });

     // Navigating to the page that makes the API call
     await page.goto("https://example.com");

     // Trigger the API call, for example by clicking a button
     await page.click("button#fetch-data");

     // Assert that the UI is updated based on the mocked response
     const dataElement = await page.waitForSelector("#data");
     expect(await dataElement.textContent()).toBe("value");
   });
   ```

2. **Using Route to Abort a Request**:

   ```javascript
   test("Abort a request", async ({ page }) => {
     await page.route("https://api.example.com/unstable-endpoint", (route) => {
       route.abort();
     });

     await page.goto("https://example.com");
     await page.click("button#fetch-data");

     // Check for a specific UI response when the request is aborted
     const errorElement = await page.waitForSelector("#error");
     expect(await errorElement.textContent()).toBe("Request failed");
   });
   ```

### Benefits of API Mocking

1. **Isolation**: Test components in isolation without relying on external services.
2. **Consistency**: Ensure consistent test results by providing predefined responses.
3. **Speed**: Reduce test run times by eliminating network latency.
4. **Edge Cases**: Easily test edge cases and error handling by simulating various server responses.

### Further Reading

- [Playwright Documentation on Route Fulfillment](https://playwright.dev/docs/network#routefulfill): Detailed information on how to use `route.fulfill` to mock responses.
- [API Testing with Playwright](https://playwright.dev/docs/test-api): Guidance on how to test APIs using Playwright.
- [Playwright Network Interception](https://playwright.dev/docs/network): Comprehensive documentation on network interception and request handling in Playwright.

These resources provide additional context and examples to help you effectively use API mocking in your Playwright tests.

### Extra example

```TypeScript
const { test, expect } = require('@playwright/test');

test('mock API response', async ({ page }) => {
  await page.route('https://api.example.com/data', route => {
    route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify({ key: 'mocked value' }),
    });
  });

  await page.goto('https://example.com');
  await page.click('button#fetch-data');

  const dataElement = await page.waitForSelector('#data');
  expect(await dataElement.textContent()).toBe('mocked value');
});

```
