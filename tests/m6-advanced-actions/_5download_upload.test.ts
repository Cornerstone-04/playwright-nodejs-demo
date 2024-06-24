import { expect, test } from "@playwright/test";
import fs from "fs";

test("Download a single file and assert", async ({ page }) => {
  await page.goto("/savings.html");

  const downloadPromise = page.waitForEvent("download");

  await page.getByText("Download Our Offer").click();

  const download = await downloadPromise;
  // things you can do with a downloadable object
  // 1. get it's suggested name
  const suggestedFileName = download.suggestedFilename();
  //   2. decide on a filepath
  const filePath = "download/" + suggestedFileName;
  // 3. save it
  await download.saveAs(filePath);
  //   4. assert success
  expect(await download.failure()).toBeNull();
  //   5. verify file exists after download
  expect(fs.existsSync(filePath)).toBeTruthy();
  //  6. get file size (in bytes)
  const fileSizeInBytes = fs.statSync(filePath).size;
  console.log(fileSizeInBytes);
  expect(fileSizeInBytes).toBeLessThan(20_000);
});
/**  download event only works for files that can't be previewed
 * e.g: download will emit for zip files but not for pdfs
 * NB: previewable files will emit download event only in headless mode
 */

test("upload", async ({ page }) => {
  await page.goto("/loans.html");
  const uploadInput = page.locator('input[type="file"]');
  await uploadInput.setInputFiles("download/dummy.pdf");

  // clear uploads 
  await uploadInput.setInputFiles([])

  // submit
  
});
