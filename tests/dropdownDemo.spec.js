import { test, expect } from '@playwright/test';

test('Dropdown assertions on testautomationpractice.blogspot.com', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');

 /*  // Country dropdown (Single select, custom example)

  const countryDropdown = page.locator('#country');
  await expect(countryDropdown).toBeVisible();
  await countryDropdown.selectOption('India');
  //await countryDropdown.selectOption("{label:'India'}");
  await expect(countryDropdown).toHaveValue('india');

  const countryDropdowncount = page.locator('#country option');
    await expect(countryDropdowncount).toHaveCount(10);
    console.log('Country dropdown has 10 options'); // Log the count of options */

    // Select option from dropdown using loop
const options = await page.$$('#country option');
for (const option of options)
     {
    let value = await option.textContent();
    if (value.includes('france')) 
        {
        await page.selectOption("#country", value);
        break;
    }
}

await page.waitForTimeout(5000);


 
});
