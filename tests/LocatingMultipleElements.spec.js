const { test, expect } = require('@playwright/test');

// Test to demonstrate locating multiple elements using different selectors

test('Locating multiple', async ({ page }) => {
  await page.goto('https://demoblaze.com/index.html');

  /* // Locate all links using CSS selector 'a'
  const links = await page.$$('a');
  for (const link of links) {
    const linkText = await link.textContent();
    console.log(linkText);
  } */

  // Locate all product titles using $$ with XPath
  await page.waitForSelector("//div[@id='tbodyid']//div//h4//a", { timeout: 5000 });
  const products = await page.$$("//div[@id='tbodyid']//div//h4//a");
  for (const product of products) {
    const productText = await product.textContent();
    console.log(productText);
  }
  
});
