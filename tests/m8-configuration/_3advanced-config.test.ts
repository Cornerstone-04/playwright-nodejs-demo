import { chromium, devices, test } from "@playwright/test";
const iPhone11 = devices["iPhone 11"]; // for mobile testing

// extract reusable values into constants to refactor code.
const slowAndHeadless = { headless: false, slowMo: 2000 };

// for values to be reused across files, refactor into objects
interface LocationData {
  longitude: number;
  latitude: number;
}

const locationCoordinates: Record<string, LocationData> = {
  Nigeria: { longitude: 8.6753, latitude: 9.082 },
  Lisbon: { longitude: -9.1393, latitude: 38.7223 },
};

const nigeria = locationCoordinates["Nigeria"];
const lisbon = locationCoordinates["Lisbon"];

test("Test 1", async () => {
  const browser = await chromium.launch(slowAndHeadless);
  const context = await browser.newContext({
    geolocation: { longitude: nigeria.longitude, latitude: nigeria.latitude },
  });
  // Add any additional steps you want to perform in Test 1
});

test("Test 2", async () => {
  const browser = await chromium.launch(slowAndHeadless);
  const context = await browser.newContext({
    viewport: iPhone11.viewport,
    userAgent: iPhone11.userAgent,
    deviceScaleFactor: iPhone11.deviceScaleFactor,
    locale: "en_GB",
    geolocation: { longitude: lisbon.longitude, latitude: lisbon.latitude },
    permissions: ["geolocation"],
  });

  const page = await context.newPage();
  await page.goto("https://maps.google.com");
  // Uncomment and use the correct button role and name if necessary
  await page.getByRole("button", { name: "Keep using web" }).click();
  await page.screenshot({ path: "screenshots/Lisbon-iPhone_11.png" });
});
