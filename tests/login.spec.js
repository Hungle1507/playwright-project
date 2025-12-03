import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage.js'


// test('open playwright website', async ({ page }) => {
//   await page.goto('https://playwright.dev');
//   await expect(page).toHaveTitle(/Playwright/);
// });

test ('try login haroku web', async ({page}) => {
  const loginPage = new LoginPage(page);
  await loginPage.gotoPage();
  await loginPage.login('tomsmith', 'SuperSecretPassword!');
  await expect(loginPage.message).toContainText('You logged into a secure area!');
});
