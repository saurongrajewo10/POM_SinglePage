var webdriver = require('selenium-webdriver');
var successfullLogingFunction = require('./reusable functions/successfullLogingFunction');
var homePage = require('../pages/homePage');
const assert = require("assert");

async function postEdition() {
    try {
        driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build();
        await driver.manage().setTimeouts({ implicit: 5000 });
        await successfullLogingFunction.successfullLogingFunction(driver);
        await assert.equal(await homePage.returnHomePageUrl(driver), 'https://www.facebook.com/');
        let postValueBeforeEdition = await homePage.getPostValue(driver);
        const test = postValueBeforeEdition;
        await homePage.postEdition(driver);
        await homePage.waitUntilPostIsEdited(driver, test);
        const postValueAfterEdition = await homePage.getPostValue(driver);
        await assert.notEqual(test, postValueAfterEdition);
        await driver.quit();
    } catch (error) {
        console.log(error);
    }
}
// postEdition();
module.exports.TC05PostEdition = postEdition;
