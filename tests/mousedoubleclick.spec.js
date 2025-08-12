const { test, expect } = require('@playwright/test');

test('Mouse Double Click', async ({ page }) => {
  // Step 1: Open the website
  await page.goto('https://testautomationpractice.blogspot.com/');

  // Step 2: Locate the "Copy Text" button
  const btnCopy = page.locator('//button[normalize-space()="Copy Text"]');

  // Step 3: Perform a double click
  await btnCopy.dblclick();

  // Step 4: Locate the target field where text should be copied
  const f2 = page.locator('#field2');

  // Step 5: Verify the copied text
  await expect(f2).toHaveValue('Hello World!');

  // Step 6: Wait so you can see the result (optional)
  await page.waitForTimeout(5000);
});
