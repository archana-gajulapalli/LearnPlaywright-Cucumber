export class LoginPage {
    constructor(page) {
      this.page = page;
        this.userName =page.locator("#user-name");
        this.password =page.locator("#password");
        this.login =page.locator("#login-button");
    }

    async goto() {
      await this.page.goto(process.env.BASE_URL);
      }
    async enterUsernameAndPassword(username,password){
        await this.userName.fill(username);
        await this.password.fill(password);

    }

    async clickOnLogin(){
        await this.login.click();
    }
}
