const { test, expect } = require('@playwright/test');

test('Mouse hover example', async ({ page }) => {
  // Step 1: Open the website
  await page.goto('https://demo.nopcommerce.com/register?returnUrl=%2F');

  // Step 2: Locate the "computer" menu and the "Desctop" submenu
  const computer = page.locator('//a[normalize-space()="Computers"]');

  const Desktops = page.locator('//a[normalize-space()="Desktops"]');

  // Step 3: Hover over "computer" to reveal the submenu
  await computer.first().hover();

  // Step 4: Hover over "Desktop" (or you can click it instead)
  await Desktops.first().hover();

  // Step 5: Wait so you can visually confirm the hover worked
  await page.waitForTimeout(5000);
});
