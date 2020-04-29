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
        let newPostValue = Math.random(1, 100);
        await homePage.postEdition(driver, newPostValue);
        const postValueAfterEdition = await homePage.getPostValue(driver);
        await assert.notEqual(newPostValue, postValueAfterEdition);
        await driver.quit();
        return { message: "TC05 successful - TC05 Post Edition", isSuccessful: true };
        
    } catch (error) {
        console.log(error);
        await driver.quit();
        return { message: "TC05 failed - TC05 Post Edition", isSuccessful: false };
    }
}
//postEdition();
module.exports.TC05PostEdition = postEdition;
