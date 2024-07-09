const { Given, When, Then } = require('@cucumber/cucumber');
const { chromium } = require('playwright');
const LoginPage = require('../../pageobjects/LoginPage');
const assert = require('assert');
let browser, page, loginPage;

Given('I open the login page', async function () {
  browser = await chromium.launch({headless:false});
  page = await browser.newPage();
  loginPage = new LoginPage(page);
  await loginPage.goto();
});

  Given('login to application with {string} and {string}', async function (username,password) {
    await loginPage.enterUsernameAndPassword(username,password);
  });

  When('I click on login button', async function () {
    await loginPage.clickOnLogin();
 
  });

  Then('I should view the homepage title {string}', async function (expectedTitle) {
    const title = await page.title();
  assert.strictEqual(title,expectedTitle );
  await browser.close();
  });