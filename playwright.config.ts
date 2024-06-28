import { defineConfig, devices } from "@playwright/test";

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
    trace: "on-first-retry"
  },
  // command to run server while testing
  webServer: {
    command: "npm start",
    url: "http://localhost:3000/",
    reuseExistingServer: true,
  },

  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
    {
      name: "firefox",
      use: { ...devices["Desktop Firefox"] },
    },
    {
      name: "Mobile Safari",
      use: { ...devices["iPhone 12 Pro"] },
      testDir: "./tests/mobile", // run tests in this directory
      testMatch: /.*smoke.test.ts/, //run only tests with smoke in their name
      retries: 0,
    },
    // global setup
    {
      name: "setup-cleanup-demo",
      testMatch: "_4global-config.test.ts",
      dependencies: ["setup"],
    },
    {
      name: "cleanup",
      testMatch: "**/global.teardown.ts",
    },
    {
      name: "setup", //must match dependency name
      testMatch: "**/global.setup.ts",
      teardown: "cleanup", //global cleanup
    },
  ], // allows you to group and run tests in multiple environments
});
