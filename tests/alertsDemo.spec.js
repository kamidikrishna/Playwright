const { test, expect } = require('@playwright/test');

test('Handle JavaScript alerts', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');

  // Simple Alert
  page.once('dialog', async dialog => {
    expect(dialog.type()).toBe('alert');
    expect(dialog.message()).toContain('I am an alert box!');
    await dialog.accept();
  });
  await page.click('button[onclick="myFunction()"]');
  // Assertion: Check result text for simple alert
  await expect(page.locator('#demo')).toHaveText('You pressed OK!');

  // Confirmation Alert
  page.once('dialog', async dialog => {
    expect(dialog.type()).toBe('confirm');
    expect(dialog.message()).toContain('Press a button!');
    await dialog.accept(); // or dialog.dismiss();
  });
  await page.click('button[onclick="myFunctionConfirm()"]');
  // Assertion: Check result text for confirmation alert
  await expect(page.locator('#demo')).toHaveText('You pressed OK!');

  // Prompt Alert
  page.once('dialog', async dialog => {
    expect(dialog.type()).toBe('prompt');
    expect(dialog.message()).toContain('Please enter your name');
    expect(dialog.defaultValue()).toBe('Harry Potter');
    await dialog.accept('Playwright User');
  });
  await page.click('button[onclick="myFunctionPrompt()"]');
  // Assertion: Check result text for prompt alert
  await expect(page.locator('#demo')).toHaveText('Hello Playwright User! How are you today?');

  // Wait to observe the result
  await page.waitForTimeout(2000);
});
