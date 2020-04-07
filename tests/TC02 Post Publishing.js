var webdriver = require('selenium-webdriver');
var successfullLogingFunction = require('./reusable functions/successfullLogingFunction');
var homePage = require('../pages/homePage');

async function postPublishing() {
    try {
        driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build();
        await driver.manage().setTimeouts({ implicit: 5000 });
        await successfullLogingFunction.successfullLogingFunction(driver);

        await homePage.postPublish(driver);

    } catch (error) {
        console.log(error);
    }
}
postPublishing();