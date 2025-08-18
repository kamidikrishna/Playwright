import { test, expect } from '@playwright/test';

test('handling table', async ({ page }) => {

  await page.goto('https://testautomationpractice.blogspot.com/');

  const table = page.locator('#productTable');

  // 1 total number of columns
  const columns = table.locator('thead tr th');
  console.log('Number of columns:', await columns.count());
  // total number of rows
  const rows = table.locator('tbody tr');
  console.log('Number of rows:', await rows.count());
  // assertions
  await expect(columns).toHaveCount(4);
  await expect(rows).toHaveCount(5);


  // 2 select check box for Tablet
  const matchedRow = rows.filter({
    has: page.locator('td'),
    hasText: 'Tablet '
  });
  await matchedRow.locator('input[type="checkbox"]').check();


  // 3 select check box for multiple products
  await selectProduct(rows, page, 'Laptop');
  await selectProduct(rows, page, 'Smartwatch');
  await selectProduct(rows, page, 'Wireless Earbuds');


  // 4 Print all product details using loop
  for (let i = 0; i < await rows.count(); i++) {
    const row = rows.nth(i);
    const tds = row.locator('td');
    const colCount = await tds.count();

    for (let j = 0; j < colCount - 1; j++) {
      const cellText = await tds.nth(j).textContent();
      console.log(cellText);
    }
  }


  // 5 Read data from all the pages in the table
  const pages = page.locator('.pagination li a');
  const totalPages = await pages.count();
  console.log('Number of pages in the table:', totalPages);

  for (let p = 0; p < totalPages; p++) {
    if (p > 0)           //because the page in nth0
         {
      await pages.nth(p).click();
    }

    for (let i = 0; i < await rows.count(); i++) {
      const row = rows.nth(i);
      const tds = row.locator('td');
      const colCount = await tds.count();

      for (let j = 0; j < colCount - 1; j++) {
        const cellText = await tds.nth(j).textContent();
        console.log(cellText);
      }
    }
  }

  // wait so we can see the checkbox action
  await page.waitForTimeout(5000);

});

// helper function
async function selectProduct(rows, page, name) {
  const matchedRow = rows.filter({
    has: page.locator('td'),
    hasText: name
  });

  await matchedRow.locator('input[type="checkbox"]').check();
}
