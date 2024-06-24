import { test, expect } from "@playwright/test";

// Annotations
// 1. Skip
test.skip("Will not run", async () => {
  console.log("this should not be printed");
});

/**
 * test.skip() will skipp all tests in the test file.
 * aka: unconditional skip
 */

// conditional skip
test("Skip (un)conditionally", async ({ page, browserName }) => {
  test.skip(browserName === "chromium", "Does not work on chromium");
  test.skip(
    (await page.getByTestId("someid").count()) === 0,
    "At least 1 element X must be present"
  );
});

/**
 * 2. fixme
 * it declares a test to be fixed
 * it can also be used at top level
 */
test.fixme("Fixme test", async () => {
  console.log("Test 3");
  
});

/**
 * 3. fail
 * can't be used at top level, only within test
 * it says that a test should fail.
 */
test("Will fail", async () => {
  test.fail();
  expect(2).toEqual(3);
});
