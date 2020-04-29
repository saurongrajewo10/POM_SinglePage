var webdriver = require('selenium-webdriver');
var successfullLogingFunction = require('./reusable functions/successfullLogingFunction');
var homePage = require('../pages/homePage');
var loginPage = require('../pages/loginPage');
const assert = require("assert");

async function logout() {
    try {
        driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build();
        await driver.manage().setTimeouts({ implicit: 5000 });
        await successfullLogingFunction.successfullLogingFunction(driver);
        await homePage.logout(driver);
        await assert.equal(await loginPage.checkIsUserLoggedOut(driver), 'Facebook – zaloguj się lub zarejestruj');
        await driver.quit();
        return { message: "TC06 successful - TC06 Logout", isSuccessful: true };

    } catch (error) {
        console.log(error);
        await driver.quit();
        return { message: "TC06 failed - TC06 Logout", isSuccessful: false };
    }
}
//logout();
module.exports.TC06Logout = logout;
