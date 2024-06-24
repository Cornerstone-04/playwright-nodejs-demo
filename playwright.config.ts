import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  reporter: "html",
  // override defaults
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
