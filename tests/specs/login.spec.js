import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage.js'
import testData from '../testdata/user.json'

test ('try login haroku web', async ({page}) => {
  const loginPage = new LoginPage(page);
  await loginPage.gotoPage();
  await loginPage.login(testData.staging.userA, testData.staging.passwordUserA);
  await expect(loginPage.message).toContainText('You logged into a secure area!');
});
