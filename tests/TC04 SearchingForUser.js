var webdriver = require('selenium-webdriver');
var successfullLogingFunction = require('./reusable functions/successfullLogingFunction');
var homePage = require('../pages/homePage');
var searchUserPage = require('../pages/searchUserPage');
const assert = require("assert");

async function searchingForUser() {
    try {
        driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build();
        await driver.manage().setTimeouts({ implicit: 5000 });
        await successfullLogingFunction.successfullLogingFunction(driver);
        await assert.equal(await driver.getCurrentUrl(), 'https://www.facebook.com/');
        await homePage.searchForUser(driver, 'Zbigniew Kumiński');
        await assert.equal(await searchUserPage.checkDisplayedSearchUser(driver),'Zbigniew Kumiński');
        await driver.quit();
    } catch (error) {
        console.log(error);
    }
}
//searchingForUser();
module.exports.TC04SearchingForUser = searchingForUser;
