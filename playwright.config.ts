import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  reporter: "html",
  fullyParallel: true, // for full parallelisation
  // override defaults

  /**
   * conifguration format
  workers: 2,
  retries: 2,
  maxFailures: 5,
  //  nested properties
  expect:{
    timeout: 2000,
    toHaveScreenshot
    
  },
  */

  use: {
    baseURL: "http://localhost:3000",
    // headless: false,
    launchOptions: { slowMo: 1000 },
    screenshot: "only-on-failure",
  },
  // command to run server while testing
  webServer: {
    command: "npm start",
    url: "http://localhost:3000/",
    reuseExistingServer: true,
  },
});
