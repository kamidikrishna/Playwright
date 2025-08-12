import { test, expect, devices } from '@playwright/test';

test.use({
  ...devices['iPhone 13'],
  browserName: 'webkit',
  headless: true // ✅ works in GitHub Actions
});


test('Login and logout on OrangeHRM', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.locator('.oxd-userdropdown-tab').click();
  await page.getByRole('menuitem', { name: 'Logout' }).first().click();
});