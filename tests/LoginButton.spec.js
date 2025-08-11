const { test, expect } = require('@playwright/test');

test('Click login button', async ({ page }) => {
  await page.goto('https://demoblaze.com/index.html');
  await page.click('#login2');
  // Optionally, you can add an assertion or log after clicking
  console.log('Clicked login button');
  // Fill username and password using CSS selectors
  await page.fill('#loginusername', 'pavanol');
  await page.fill('#loginpassword', 'test@123');

  // Click the login button using XPath
  await page.click("//button[normalize-space()='Log in']");

  // Check if the logout button is available using XPath
  const logoutButton = await page.locator("(//a[normalize-space()='Log out'])[1]");
  await expect(logoutButton).toBeVisible();
  console.log('Logout button is visible');
});
