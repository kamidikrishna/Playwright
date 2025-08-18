import { test, expect } from '@playwright/test';

test('Page screenshot', async ({ page }) => {
  await page.goto('https://demo.nopcommerce.com/');
  await page.screenshot({ path: `tests/screenshots/${Date.now()}_HomePage.png` });
});

test.only('Full page screenshot', async ({ page }) => {
  await page.goto('https://demo.nopcommerce.com/');
  await page.screenshot({ path: `tests/screenshots/${Date.now()}_FullPage.png`, fullPage: true });
});

test('Element screenshot', async ({ page }) => {
  await page.goto('https://demo.nopcommerce.com/');
  // Screenshot of "Build your own computer" product image
  await page.locator('img[alt="Picture of Build your own computer"]')
    .screenshot({ path: `tests/screenshots/${Date.now()}_BuildYourOwnComputer.png` });
});
