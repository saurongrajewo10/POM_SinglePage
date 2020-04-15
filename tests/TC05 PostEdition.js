var webdriver = require('selenium-webdriver');
var successfullLogingFunction = require('./reusable functions/successfullLogingFunction');
var homePage = require('../pages/homePage');
const assert = require("assert");

async function searchingForUser() {
    try {
        driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build();
        await driver.manage().setTimeouts({ implicit: 5000 });
        await successfullLogingFunction.successfullLogingFunction(driver);
        await assert.equal(await homePage.returnHomePageUrl(driver), 'https://www.facebook.com/');
        const postValueBeforeEdition = await homePage.getPostValue(driver);
        await homePage.postEdition(driver);
        await homePage.waitUntilPostIsEdited(driver, postValueBeforeEdition);
        const postValueAfterEdition = await homePage.getPostValue(driver);
        await assert.notEqual(postValueBeforeEdition, postValueAfterEdition);
    } catch (error) {
        console.log(error);
    }
}
searchingForUser();