var webdriver = require('selenium-webdriver');
var successfullLogingFunction = require('./reusable functions/successfullLogingFunction');
var homePage = require('../pages/homePage');
const assert = require("assert");

async function postEditionRemastered() {
    try {
        driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build();
        await driver.manage().setTimeouts({ implicit: 5000 });
        await successfullLogingFunction.successfullLogingFunction(driver);
       
        await driver.quit();
    } catch (error) {
        console.log(error);
    }
}
 postEditionRemastered();
module.exports.TC05PostEditionRemastered = postEditionRemastered;
