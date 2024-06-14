import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  reporter: "html",
  // override defaults
  use: {
    baseURL: "http://localhost:3000",
    headless: false,
    launchOptions: { slowMo: 1500 },
  },
  // command to run server while testing
  webServer: {
    command: "npm start",
    url: "http://localhost:3000/",
  },
});
