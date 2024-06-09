import { test, chromium, webkit, firefox } from "@playwright/test";

// test container
test("Browser support demo", async () => {
  for (const browserType of [chromium, webkit, firefox]) {
    console.log("Running", browserType.name());

    // launch browser
    const browser = await browserType.launch();
    // open a new page
    const page = await browser.newPage();

    // navigate to browser identifier
    await page.goto("https://www.whatsmybrowser.org/");
    // take a screenshot
    await page.screenshot({ path: `pw-${browserType.name()}.png` });

    // close resources
    await page.close();
    await browser.close();
  }
});

//NOTE: run this file in terminal with `npx playwright test ./tests/m2-setup/browser-support.test.tsx`
