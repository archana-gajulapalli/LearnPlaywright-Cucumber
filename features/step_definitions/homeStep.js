const { Given, When, Then } = require('@cucumber/cucumber');
const { chromium } = require('playwright');
const LoginPage = require('../../pageobjects/LoginPage');
const assert = require('assert');
let loginPage;

Given('I am on login page', async function () {
  loginPage = new LoginPage(this.page);
  await loginPage.goto();
});

  Given('login to application with {string} and {string}', async function (username,password) {
    await loginPage.enterUsernameAndPassword(username,password);
  });

  When('I click on login button', async function () {
    await loginPage.clickOnLogin();
 
  });

  Then('I verify the homepage title as {string}', async function (expectedTitle) {
    const title = await this.page.title();
  assert.strictEqual(title,expectedTitle );
  
  });