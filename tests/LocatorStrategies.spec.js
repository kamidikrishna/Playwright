const { test, expect } = require('@playwright/test');

// This test demonstrates different Playwright locators:
// - page.getByRole() to locate by explicit and implicit accessibility attributes.
// - page.getByText() to locate by text content.
// - page.getByLabel() to locate a form control by associated label's text.
// - page.getByPlaceholder() to locate an input by placeholder.
// - page.getByAltText() to locate an element, usually image, by its text alternative.
// - page.getByTitle() to locate an element by its title attribute.

test('Different locator strategies on OrangeHRM login', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  // getByAltText: Locate the logo image by its alt text
  const logoImage = page.getByAltText('company-branding');
  await expect(logoImage).toBeVisible();

  // getByText: Locate the "Forgot your password?" link by its text
  const forgotPasswordLink = page.getByText('Forgot your password?');
  await expect(forgotPasswordLink).toBeVisible();

  // getByLabel: Locate the username input by its label
  
  const usernamehead = page.getByPlaceholder('Username');
  await usernamehead.fill('Admin');
  await expect(usernamehead).toBeVisible();

  // getByPlaceholder: Locate the password input by its placeholder
  const passwordInput = page.getByPlaceholder('Password');
  await passwordInput.fill('admin123');
  await expect(passwordInput).toBeVisible();
  
  // getByRole: Locate the "Login" button by its role
  const loginButton = page.getByRole('button', { name: 'Login' });
  await expect(loginButton).toBeVisible();
  await loginButton.click();
  

  // getByTitle: Locate an element by its title attribute (if present)
  // Example: If there is an element with title="OrangeHRM"
  // const titleElement = page.getByTitle('OrangeHRM');
  // await expect(titleElement).toBeVisible();

  // You can interact with these elements as needed
});
