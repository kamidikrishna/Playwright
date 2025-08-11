// @ts-check
const { test, expect } = require('@playwright/test');

// Custom agent (can be extended to mock user-agent or proxy etc.)
const AGENT = {
  name: 'PlaywrightAgent',
  version: '1.0.0',
  userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) PlaywrightAgent/1.0.0'
};

test.describe('Web Application UI Tests with Agent', () => {

  test.beforeEach(async ({ page }, testInfo) => {
    // Optionally log test metadata
    console.log(`Running test: ${testInfo.title} with agent: ${AGENT.name}`);

    // Override user-agent for the page
    await page.context().setExtraHTTPHeaders({
      'User-Agent': AGENT.userAgent
    });

    // Navigate to the base URL (you can configure this in playwright.config.js)
    await page.goto('https://example.com');
  });

  test('should load the homepage and check title', async ({ page }) => {
    const title = await page.title();
    expect(title).toContain('Example Domain');
  });

  test('should navigate to More Info and validate URL', async ({ page }) => {
    await page.click('text=More information'); // example link
    await expect(page).toHaveURL(/.*iana\.org/);
  });

  test.afterEach(async ({ page }, testInfo) => {
    if (testInfo.status !== testInfo.expectedStatus) {
      // Automatically take a screenshot if the test fails
      await page.screenshot({ path: `screenshots/${testInfo.title}.png`, fullPage: true });
    }
    console.log(`Test ${testInfo.title} finished with status: ${testInfo.status}`);
  });
});
