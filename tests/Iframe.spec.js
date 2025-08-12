const { test, expect } = require('@playwright/test');

test('Handle frames using different approaches', async ({ page }) => {
  // Navigate to the page with frames
  await page.goto('https://ui.vision/demo/webtest/frames/');

  // Get all frames and log the count
  const allFrames = page.frames();
  console.log("Number of frames:", allFrames.length);

  // ----- Approach 1: Using frame name or URL -----
  // By name
  // const frame1 = await page.frame({ name: 'name_of_frame' });

  // By URL
  const frame1 = await page.frame({
    url: 'https://ui.vision/demo/webtest/frames/frame_1.html'
  });

  await frame1.fill("[name='mytext1']", 'Hello from Approach 1');

  // ----- Approach 2: Using frameLocator -----
  await page
    .frameLocator("frame[src='frame_1.html']")
    .locator("[name='mytext1']")
    .fill('Hello from Approach 2');

  // Wait for 5 seconds so you can see the result
  await page.waitForTimeout(5000);
});
