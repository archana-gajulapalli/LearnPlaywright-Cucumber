import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from 'chai';
import { chromium } from 'playwright';
import {LoginPage} from '../pageobjects/LoginPage.js';


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
    expect(title).to.equal(expectedTitle);
  
  });