const { chromium } = require("playwright");

// 'ify' function that runs immediately
async function firstScript() {
  // create a browser instance on chromium
  const browser = await chromium.launch();
  //close the instance
  await browser.close();
  console.log("We got to this line");
}

firstScript();
