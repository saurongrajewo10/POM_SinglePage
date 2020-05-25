var webdriver = require('selenium-webdriver');
var Alert = require('selenium-webdriver')
var loginPage = require('../pages/loginPage');
var homePage = require('../pages/homePage');
var user = require('./../tests/users/users.json');

async function experiments() {
    driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build();
    await loginPage.navigateToFacebookLoginPage(driver);
    await loginPage.loginToFacebook(driver, user.email, user.password);
    await homePage.waitUntilUrlIsFacebook(driver);
    
    // CREATION OF NEW TAB AND SWITCHING TO FIRST ONE
    await driver.switchTo().newWindow();
    let handles = await driver.getAllWindowHandles();
    await driver.switchTo().window(handles[0]);
    // CREATION OF NEW TAB AND SWITCHING TO FIRST ONE

    // OPEN AN ALERT AND ACCEPT
    await driver.executeScript(`alert("Hello! I am an alert box!!");`);
    let alert = await driver.switchTo().alert();
    await alert.accept();
    // OPEN AN ALERT AND ACCEPT

    
}
experiments();