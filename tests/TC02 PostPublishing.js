const assert = require("assert");
var webdriver = require('selenium-webdriver');
var successfullLogingFunction = require('./reusable functions/successfullLogingFunction');
var homePage = require('../pages/homePage');

async function postPublishing() {
    try {
        driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build();
        await driver.manage().setTimeouts({ implicit: 5000 });
        await successfullLogingFunction.successfullLogingFunction(driver);
        await assert.equal(await homePage.returnHomePageUrl(driver), 'https://www.facebook.com/');
        await homePage.postPublish(driver);
        await homePage.waitUntilPostIsFound(driver);
        await assert.equal(await homePage.checkWhenPostAdded(driver), 'Przed chwilą');
    } catch (error) {
        console.log(error);
    }
}
postPublishing();