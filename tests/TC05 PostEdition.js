var webdriver = require('selenium-webdriver');
var successfullLogingFunction = require('./reusable functions/successfullLogingFunction');
var homePage = require('../pages/homePage');
const assert = require("assert");

async function postEdition() {
    try {
        driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build();
        await driver.manage().setTimeouts({ implicit: 5000 });
        await successfullLogingFunction.successfullLogingFunction(driver);
        await assert.equal(await driver.getCurrentUrl(), 'https://www.facebook.com/');
        let newPostValue = Math.random(1,100);
        await homePage.postEdition(driver, newPostValue);
        await homePage.waitUntilPostIsEdited(driver, newPostValue);
        const postValueAfterEdition = await homePage.getPostValue(driver);
        await assert.equal(newPostValue, postValueAfterEdition);
        await driver.quit();
    } catch (error) {
        console.log(error);
    }
}
 postEdition();
module.exports.TC05PostEdition = postEdition;
