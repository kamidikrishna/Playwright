import { test, expect } from '@playwright/test';

let page;

test.beforeEach(async ({ browser }) => {
  // Create a new page
  page = await browser.newPage();

  // Navigate to the site
  await page.goto('https://www.demoblaze.com/index.html');

  // Login
  await page.locator('#login2').click();
  await page.locator('#loginusername').fill('pavanol');
  await page.locator('#loginpassword').fill('test@123');
  await page.locator('//button[normalize-space()="Log in"]').click();
});

test.afterEach(async () => {
  // Logout after each test
  await page.locator('#logout2').click();
});


  //Test: Verify number of products on home page
 test('Check Home Page Products', async ({}) => {
  const products = await page.$$('.hrefch');
  expect(products.length).toBe(9);
});

//  Add product to cart
test('Add Product to Cart Test', async ({}) => {
  await page.locator('//a[normalize-space()="Samsung galaxy s6"]').click()
  await page.locator('//a[normalize-space()="Add to cart"]').click();

  // Handle the alert
  // Listen for alert dialog BEFORE clicking "Add to cart"
  page.once('dialog', async dialog => {
    expect(dialog.message()).toContain('Product added');
    await dialog.accept();
  });
});
