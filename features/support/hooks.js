const { Before, After, BeforeAll, AfterAll } = require('@cucumber/cucumber');
const { chromium, firefox, webkit } = require('playwright');
const dotenv = require('dotenv');

// Load environment variables from .env file based on the NODE_ENV
const environment = process.env.NODE_ENV || 'development';
dotenv.config({ path: `.env.${environment}` });

let browser;

BeforeAll(async function () {
  const browserType = process.env.BROWSER || 'chromium';
  switch (browserType) {
    case 'firefox':
      browser = await firefox.launch({ headless: process.env.HEADLESS === 'true' });
      break;
    case 'webkit':
      browser = await webkit.launch({ headless: process.env.HEADLESS === 'true' });
      break;
    case 'chromium':
    default:
      browser = await chromium.launch({ headless: process.env.HEADLESS === 'true' });
      break;
  }
});

Before(async function () {
  this.context = await browser.newContext();
  this.page = await this.context.newPage();
});

After(async function () {
  if (this.page) {
    await this.page.close();
  }
  if (this.context) {
    await this.context.close();
  }
});

AfterAll(async function () {
  if (browser) {
    await browser.close();
  }
});
