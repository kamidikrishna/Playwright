import { test, expect } from '@playwright/test';

test('Multi-select dropdown assertions', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');

  // Select multiple options from multi select dropdown
  await page.selectOption('#colors', ['Blue', 'Red', 'Yellow']);

  // Assertion 1: check number of options in dropdown (Playwright locator)
  const colorOptions = await page.locator('#colors option');
  await expect.soft(colorOptions).toHaveCount(7);

  // Assertion 2: check number of options in dropdown using JS array
  const colorOptionsArray = await page.$$('#colors option');
  console.log('Number of options:', colorOptionsArray.length);
  await expect(colorOptionsArray.length).toBe(7);


});
