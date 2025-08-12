const { test, expect } = require('@playwright/test');

test('Drag and Drop on GlobalSQA', async ({ page }) => {
  await page.goto('https://www.globalsqa.com/demo-site/draganddrop/');

  // target the specific iframe (photo-manager demo)
  const frame = page.frameLocator('iframe.demo-frame[src*="photo-manager.html"]');

  const source = frame.locator('li:nth-child(1) img');
  const target = frame.locator('#trash');

  await source.dragTo(target);

  // verify the drop (prefer assert over sleep)
  await expect(target.locator('img')).toHaveCount(1);
});
