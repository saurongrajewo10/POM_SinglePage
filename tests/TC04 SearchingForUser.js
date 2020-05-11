var webdriver = require('selenium-webdriver');
var successfullLogingFunction = require('./reusable functions/successfullLogingFunction');
var homePage = require('../pages/homePage');
var searchUserPage = require('../pages/searchUserPage');
const assert = require("assert");
const sleep = (milliseconds) => new Promise(resolve => setTimeout(resolve, milliseconds));

async function searchingForUser() {
    try {
        driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build();
        await driver.manage().setTimeouts({ implicit: 5000 });
        await successfullLogingFunction.successfullLogingFunction(driver);
        await sleep(1000);
        await assert.equal(await driver.getCurrentUrl(), 'https://www.facebook.com/');
        await homePage.searchForUser(driver,  'Zbigniew Kumiński');
        await assert.equal(await searchUserPage.checkDisplayedSearchUser(driver),'Zbigniew Kumiński');
        await driver.quit();
        return { message: "TC04 successful - TC04 Searching For User", isSuccessful: true };

    } catch (error) {
        console.log(error);
        await driver.quit();
        return { message: "TC04 failed - TC04 Searching For User", isSuccessful: false };
    }
}
// searchingForUser();
module.exports.TC04SearchingForUser = searchingForUser;
