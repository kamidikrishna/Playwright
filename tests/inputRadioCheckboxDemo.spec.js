import { test, expect } from '@playwright/test';

test('Input, radio button, and checkbox assertions', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');

  /* // Input field
  const nameInput = page.locator('#name');
  await expect(nameInput).toBeVisible();
  await nameInput.fill('Playwright User');
  await expect(nameInput).toHaveValue('Playwright User');

  // Radio button (Male)
  const maleRadio = page.locator('input[type="radio"][value="male"]');
  await expect(maleRadio).toBeVisible();
  await expect(maleRadio).toBeEnabled();
  await maleRadio.check();
  await expect(maleRadio).toBeChecked(); */

  // Checkbox (Tuesday)
  const tuesdayCheckbox = page.locator('input[type="checkbox"][id="tuesday"]');
  await expect(tuesdayCheckbox).toBeVisible();
  await expect(tuesdayCheckbox).toBeEnabled();
  await tuesdayCheckbox.check();
  await expect(tuesdayCheckbox).toBeChecked();
  await expect((tuesdayCheckbox).isChecked()).toBeTruthy();

  // Checkbox (Friday, to show unchecked assertion)
  const fridayCheckbox = page.locator('input[type="checkbox"][id="friday"]');
  await expect(fridayCheckbox).not.toBeChecked();
  await expect(await fridayCheckbox.isChecked()).toBeFalsy();


  const checkboxLocator = ['input[type="checkbox"][id="thursday"]',
    'input[type="checkbox"][id="monday"]',
    'input[type="checkbox"][id="sunday"]'];
    // Check and uncheck multiple checkboxes
    for (const checkbox of checkboxLocator) {
        await page.locator(checkbox).check();
        await expect(page.locator(checkbox)).toBeChecked();
    }
    for (const checkbox of checkboxLocator) {
        if (await page.locator(checkbox).isChecked()) {
            await page.locator(checkbox).uncheck();
            await expect(page.locator(checkbox)).not.toBeChecked();
        }
  
    }

});
