const { test, expect } = require('@playwright/test');

test('Mouse Right Click', async ({ page }) => {
  // Step 1: Open the right-click demo page
  await page.goto('http://swisnl.github.io/jQuery-contextMenu/demo.html');

  // Step 2: Locate the button
  const button = page.locator('//span[normalize-space()="right click me"]');

  // Step 3: Perform right-click action
  await button.click({ button: 'right' });

  // Step 4: Wait to see the context menu
  await page.waitForTimeout(5000);
});
