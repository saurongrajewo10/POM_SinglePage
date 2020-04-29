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
        await assert.equal(await failedLoginPage.returnFailedLoginPageUrl(driver), 'https://www.facebook.com/login/device-based/regular/login/?login_attempt=1&lwv=110', 'Loging is not working');
        await assert.equal(await failedLoginPage.returnLoginErrorStatement(driver), 'Wprowadzony adres e-mail lub numer telefonu nie pasuje do żadnego konta. Załóż konto.');
        await failedLoginPage.loginToFacebook(driver, user.email, user.password);
        await homePage.waitUntilUrlsFacebook(driver);
        await homePage.closeGrayScreen(driver);
        await driver.quit();
        return { message: "TC01 successful - TC01 Loging", isSuccessful: true }; 
    }
    catch (error) {
        console.log(error);
        await driver.quit();
        return { message: "TC01 failed - TC01 Loging", isSuccessful: false };
    }
}
// Loging();

module.exports.TC01Loging = Loging;

