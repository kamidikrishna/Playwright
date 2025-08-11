import { test, expect } from '@playwright/test';

test('Assertions demo on nopCommerce', async ({ page }) => {
  await page.goto('https://demo.nopcommerce.com/register');

  // expect(page).toHaveURL()
  await expect(page).toHaveURL('https://demo.nopcommerce.com/register');

  // expect(page).toHaveTitle()
  // The actual title may be 'nopCommerce demo store' or 'nopCommerce demo store. Login' depending on the page state.
  // To make the test robust, use a regex or check the actual title first.
  await expect(page).toHaveTitle(/nopCommerce demo store/i);

  // expect(locator).toBeVisible()
  const searchBox = page.locator('#small-searchterms');
  await expect(searchBox).toBeVisible();

  // expect(locator).toBeEnabled()
  await expect(searchBox).toBeEnabled();

/* // expect(locator).toBeDisabled() (using newsletter input after disabling it for demo)
const newsletterInput = page.locator("//div[@class='news-list-homepage'] //div[.='News']");
await expect(newsletterInput).toBeDisabled(); */

// expect(locator).toBeChecked() (using newsletter checkbox after checking it for demo)
const newsletterCheckbox = page.locator('input[type="checkbox"][name="Newsletter"]');
await expect(newsletterCheckbox).toBeChecked();

  // expect(locator).toHaveAttribute()
  const logo = page.locator("img[alt='nopCommerce demo store']");
  await expect(logo).toHaveAttribute('src', 'https://demo.nopcommerce.com/Themes/DefaultClean/Content/images/logo.png');

  // expect(locator).toHaveText()
  const RegisterText = page.locator('.page-title > h1');
  await expect(RegisterText).toHaveText('Register');

  // expect(locator).toContainText()
  const footer = page.locator('div.footer');
  await expect(footer).toContainText('Copyright');

  // expect(locator).toHaveValue(value)
  await searchBox.fill('laptop');
  await expect(searchBox).toHaveValue('laptop');

  // expect(locator).toHaveCount()
  const topMenuLinks = page.locator('ul.top-menu.notmobile > li > a');
  await expect(topMenuLinks).toHaveCount(7);
});
