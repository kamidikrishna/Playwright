import { test, expect } from '@playwright/test';

// Global hooks
test.beforeAll(async () => {
  console.log('Before All Tests');
});

test.afterAll(async () => {
  console.log('After All Tests');
});

test.beforeEach(async () => {
  console.log('Before Each Test');
});

test.afterEach(async () => {
  console.log('After Each Test');
});

// Group 1
test.describe('Group 1', () => {
  test('Test1', async ({ page }) => {
    console.log('Group 1 - This is Test 1');
  });

  test('Test2', async ({ page }) => {
    console.log('Group 1 - This is Test 2');
  });

  test('Test3', async ({ page }) => {
    console.log('Group 1 - This is Test 3');
  });
});

// Group 2
test.describe.skip('Group 2', () => {
  test('Test4', async ({ page }) => {
    console.log('Group 2 - This is Test 4');
  });

  test('Test5', async ({ page }) => {
    console.log('Group 2 - This is Test 5');
  });

  test('Test6', async ({ page }) => {
    console.log('Group 2 - This is Test 6');
  });
});
