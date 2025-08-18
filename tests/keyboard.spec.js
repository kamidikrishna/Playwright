const { test, expect } = require('@playwright/test');

test('Keyboard actions with assertion', async ({ page }) => {
  await page.goto("https://gotranscript.com/text-compare");

  const inputText = 'welcome to automation';

  await page.type('[name="text1"]', inputText);

  // Ctrl + A - Select all
  await page.keyboard.press('Control+A');

  // Ctrl + C - Copy
  await page.keyboard.press('Control+C');

  // Tab to second text area
  await page.keyboard.press('Tab');

  // Ctrl + V - Paste
  await page.keyboard.press('Control+V');

  // Assertion - verify pasted text
  const pastedText = await page.locator('[name="text2"]').inputValue();
  await expect(pastedText).toBe(inputText);

  await page.waitForTimeout(2000);
});
