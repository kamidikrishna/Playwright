const {test, expect} = require('@playwright/test');  
// Import Playwright test module test is for defining tests and expect is for assertions
//page is a browser context that allows interaction with the web page
//()=> anonymous function that will be executed when the test runs
//async allows the use of await inside the function, enabling asynchronous operations
test('Home Page',async ({page}) => {  

  await page.goto('https://demoblaze.com/index.html');

  const pageTitle = await page.title();
  console.log('Page title is:', pageTitle);
     await expect(page).toHaveTitle('STORE');
    // Assert that the page title is 'STORE'
  
    const pageurl = page.url();
  console.log('Page URL is:', pageurl);
    // Log the page URL to the console
    await expect(page).toHaveURL('https://demoblaze.com/index.html');
  await page.close();
})