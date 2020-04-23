const assert = require("assert");
var webdriver = require('selenium-webdriver');
var successfullLogingFunction = require('./reusable functions/successfullLogingFunction');
var homePage = require('../pages/homePage');

async function postPublishing() {
    try {
        driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build();
        await driver.manage().setTimeouts({ implicit: 5000 });
        await successfullLogingFunction.successfullLogingFunction(driver);
        await assert.equal(await driver.getCurrentUrl(), 'https://www.facebook.com/');
        let postValue = await homePage.postPublish(driver);
        const postValueAfterCreation = await homePage.getPostValue(driver);
        await assert.notEqual(postValue, postValueAfterCreation);
        await driver.quit();
    } catch (error) {
        console.log(error);
    }
}
 //postPublishing();

module.exports.TC02PostPublishing = postPublishing;
