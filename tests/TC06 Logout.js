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
        await assert.notEqual(loginPage.checkIsUserLoggedOut, 'https://www.facebook.com/');
        await driver.quit();
    } catch (error) {
        console.log(error);
    }
}
// logout();
module.exports.TC06Logout = logout;
