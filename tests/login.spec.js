import { test, expect } from '@playwright/test';

test('open playwright website', async ({ page }) => {
  await page.goto('https://playwright.dev');
  await expect(page).toHaveTitle(/Playwright/);
});
