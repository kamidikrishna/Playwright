import { test, expect } from '@playwright/test';

test('file upload', async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  // Use double backslashes or forward slashes for file path
  await page.locator('#singleFileInput').setInputFiles('tests/Files/dummy-pdf_1.pdf');

  // Click the upload button
  await page.locator('//button[normalize-space()="Upload Single File"]').click();

  // Verify uploaded file status
  await expect(page.locator('#singleFileStatus'))
    .toHaveText('Single file selected: dummy-pdf_1.pdf, Size: 7478 bytes, Type: application/pdf');

    await page.waitForTimeout(5000);
});

    test('multi file upload', async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  // Use double backslashes or forward slashes for file path
  await page.locator('#multipleFilesInput').setInputFiles(['tests/Files/dummy-pdf_1.pdf','tests/Files/dummy-pdf_1.pdf']);

  // Click the upload button
  await page.locator('//button[normalize-space()="Upload Multiple Files"]').click();

  // Verify uploaded file status
  await expect(page.locator('#multipleFilesStatus'))
    .toHaveText("Multiple files selected: dummy-pdf_1.pdf, Size: 7478 bytes, Type: application/pdf dummy-pdf_1.pdf, Size: 7478 bytes, Type: application/pdf ");

    await page.waitForTimeout(5000);


});
