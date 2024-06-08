import { chromium } from "@playwright/test";

// 'ify' function
(async function firstScript() {
  // create a browser instance on chromium
  const browser = await chromium.launch();
  //close the instance
  await browser.close();
  console.log("We got to this line");
})();
