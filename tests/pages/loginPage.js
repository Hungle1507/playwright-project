export class LoginPage {
    constructor(page) {
        this.page = page;
        this.userNameInput = page.locator('#username');
        this.passwordInput = page.locator('#password');
        this.submitBtn = page.locator('//button[@type="submit"]');
        this.message = page.locator('#flash');
    }
    async gotoPage() {
       await this.page.goto('https://the-internet.herokuapp.com/login');
    }
    async enterUserName(userName) {
        await this.userNameInput.fill(userName);
    }
    async enterPassword(password) {
        await this.passwordInput.fill(password);
    }

    async login(username, password) {
    await this.enterUserName(username);
    await this.enterPassword(password);
    await this.submitBtn.click();
  }
}
