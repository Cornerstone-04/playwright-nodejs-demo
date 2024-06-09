import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  reporter: "html",

  // command to run server while testing
  // webServer: {
  //   command: "npm start",
  //   url: "http://localhost:3000/",
  //},
});
