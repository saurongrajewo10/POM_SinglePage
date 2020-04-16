const assert = require("assert");
var loginPage = require('../pages/loginPage');
var webdriver = require('selenium-webdriver');
var failedLoginPage = require('../pages/failedLoginPage');
var homePage = require('../pages/homePage');
var user = require('./../tests/users/users.json');

async function Loging() {
    try {
        driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build();
        await loginPage.navigateToFacebookLoginPage(driver);
        await loginPage.loginToFacebook(driver, 'dajto', 'wciapkach');
        await assert.equal(await failedLoginPage.returnFailedLoginPageUrl(driver), 'https://www.facebook.com/login/device-based/regular/login/?login_attempt=1&lwv=110', 'Zjebao sie');
        await assert.ok(await failedLoginPage.returnLoginErrorStatement(driver));
        await failedLoginPage.loginToFacebook(driver, user.email, user.password);
        await assert.equal(await homePage.returnHomePageUrl(driver), 'https://www.facebook.com/');
        await homePage.closeGrayScreen(driver);
        await driver.quit();
    }
    catch (error) {
        console.log(error);
    }
}
// Loging();

module.exports.TC01Loging = Loging;

