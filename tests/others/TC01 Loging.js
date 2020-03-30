var loginPage = require('../../pages/loginPage');
var webdriver = require('selenium-webdriver');

driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build();

loginPage.navigateToFacebookLoginPage(driver);