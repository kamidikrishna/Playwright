const { test, expect } = require('@playwright/test');

test('Handle inner/nested frames', async ({ page }) => {
  // Step 1: Open the frames page
  await page.goto('https://ui.vision/demo/webtest/frames/');

  // Step 2: Get the outer frame (frame_3)
  const outerFrame3 = await page.frame({
    url: 'https://ui.vision/demo/webtest/frames/frame_3.html'
  });

  // Step 3: From the outer frame, get the inner frame (frame_4)
  const innerFrame = outerFrame3.childFrames()[0];

  // Step 4: Fill the text box inside the inner frame
 // await innerFrame.fill("input[name='mytext3']", 'Welcome from Playwright');
  await innerFrame.locator('//*[@id="i6"]/div[3]/div').check(); // Check the checkbox in the inner frame

  // Step 5: Wait so we can see the result before test ends
  await page.waitForTimeout(5000);
});
