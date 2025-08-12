import { test, expect } from '@playwright/test';

test('Hard and soft assertions demo', async ({ page }) => {
  await page.goto('https://demoblaze.com/index.html');

  // Hard assertions (test stops if any of these fail)
  await expect(page).toHaveTitle(/STORE/i);
  await expect(page.locator('#login2')).toBeVisible();
  await expect(page.locator('#cartur')).toBeEnabled();

  // Soft assertions (test continues even if these fail)
  await expect.soft(page.locator('#signin2')).toBeVisible();
  //await expect.soft(page.locator('img#nava')).toBeVisible();
  await expect.soft(page.locator('a[data-target="#exampleModal"]')).toHaveAttribute('href', '#');
  
});