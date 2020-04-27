var webdriver = require('selenium-webdriver');
var successfullLogingFunction = require('./reusable functions/successfullLogingFunction');
var homePage = require('../pages/homePage');
const assert = require("assert");

async function changeLanguage() {
    try {
        driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build();
        await driver.manage().setTimeouts({ implicit: 5000 });
        await successfullLogingFunction.successfullLogingFunction(driver);
        await assert.equal(await driver.getCurrentUrl(), 'https://www.facebook.com/');
        var newLanguage = await homePage.changeLanguage(driver);
        var oldLanguage = await homePage.checkLanguageText(driver, '#pagelet_rhc_footer > div > div.uiContextualLayerParent > div > div > div._4bl9 > div > span:nth-child(1)');
        await assert.notEqual(newLanguage, oldLanguage);
        await homePage.changeLanguage(driver);
        await driver.quit();
        return "TC03 successful- TC03 Change Language";
    } catch (error) {
        console.log(error);
        await driver.quit();
        return "TC03 failed- TC03 Change Language";
    }
}
//changeLanguage();

module.exports.TC03ChangeLanguage = changeLanguage;
