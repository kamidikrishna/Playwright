import { test } from '@playwright/test';

test('Login, search PIM, and logout', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();

  await page.getByRole('textbox', { name: 'Search' }).fill('PIM');
//  await page.getByRole('textbox', { name: 'Search' }).press('Enter');
  await page.getByRole('link', { name: 'PIM' }).click();

//  await page.getByRole('button', { name: 'Reload' }).click();
  await page.locator('span', { hasText: 'manda user' }).click();
  await page.getByRole('menuitem', { name: 'Logout' }).click();
});
