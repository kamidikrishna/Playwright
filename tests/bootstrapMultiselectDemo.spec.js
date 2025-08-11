const { test, expect } = require('@playwright/test');

test('Bootstrap multiselect dropdown', async ({ page }) => {
  await page.goto('https://www.jqueryscript.net/demo/Drop-Down-Combo-Tree/');

  // Open the multiselect dropdown
  await page.locator('#justAnInputBox').click();

  // Assertion: Check the number of options in the dropdown
  const options = await page.locator('.comboTreeItemTitle');
  await expect(options).toHaveCount(45); // There are 45 visible options in the demo

  // Select multiple options (e.g., 'choice 1' and 'choice 2 2')
  await options.nth(0).click(); // choice 1
  await options.nth(3).click(); // choice 2 2

  // Assert that the input box contains the selected values
  const inputValue = await page.locator('#justAnInputBox').inputValue();
  expect(inputValue).toContain('choice 1');
  expect(inputValue).toContain('choice 2 2');

  await page.waitForTimeout(3000); // Pause to observe in headed mode
});
