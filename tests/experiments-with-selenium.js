var webdriver = require('selenium-webdriver');
var Alert = require('selenium-webdriver')
var loginPage = require('../pages/loginPage');
var homePage = require('../pages/homePage');
var user = require('./../tests/users/users.json');
var actions = require('selenium-webdriver/lib/input');
var WebElement = require('selenium-webdriver');
const { Builder, By, Key, until, Actions, mouseDown } = require("selenium-webdriver");

async function experiments() {
    driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build();
    await loginPage.navigateToFacebookLoginPage(driver);
    await loginPage.loginToFacebook(driver, user.email, user.password);
    await homePage.waitUntilUrlIsFacebook(driver);
    await homePage.closeGrayScreen(driver);

    // RETURNING BROSWER SETTINGS AND STATISTICS
    // let elo = await driver.getCapabilities();
    // console.log(elo);
    // RETURNING BROSWER SETTINGS AND STATISTICS

    // CREATION OF NEW TAB AND SWITCHING TO FIRST ONE
    // await driver.switchTo().newWindow();
    // let handles = await driver.getAllWindowHandles();
    // await driver.switchTo().window(handles[0]);
    // CREATION OF NEW TAB AND SWITCHING TO FIRST ONE

    // OPEN AN ALERT AND ACCEPT
    // await driver.executeScript(`alert("Hello! I am an alert box!!");`);
    // let alert = await driver.switchTo().alert();
    // await alert.accept();
    // OPEN AN ALERT AND ACCEPT

    // const actions = await new actions.Actions();
    // await actions
    // .keyDown(ALT)
    // .keyDown(F4)
    // .mouseDown(await driver.findElement(By.css("#u_0_a > div:nth-child(1) > div:nth-child(1) > div > a > span > span")))
    // .mouseMove(await driver.findElement(By.className('_3en1 _480e navigationFocus')))
    // .mouseUp()
    // .perform();
    // It is not working

    // TAKE A SCREENSHOT AND RETURN BASE ENCODED STRING (64 BASE CODED)
    // let screen = await driver.takeScreenshot();
    // console.log(screen);
    // TAKE A SCREENSHOT AND RETURN BASE ENCODED STRING (64 BASE CODED)

    // RETURN A PAGE SOURCE
    // let HTMLCode = await driver.getPageSource();
    // console.log(HTMLCode);
    // RETURN A PAGE SOURCE

    // RETURN A OBJECT WITH SIZE AND POSITION OF WEBELEMENT
    // let elementLocation = await driver.findElement(By.className('_4un6')).getRect();
    // console.log(elementLocation)
    // RETURN A OBJECT WITH SIZE AND POSITION OF WEBELEMENT

    // CHECK IF CHECKBOX IS SELECTED
    // let radioButton = await driver.findElement(By.css('#main > div.w3-row > div:nth-child(1) > input[type=checkbox]:nth-child(2)'));
    // await radioButton.click();
    // console.log(await radioButton.isSelected());
    // CHECK IF CHECKBOX IS SELECTED

    // RETURNS AN ARRAY OF MATCHING WEBELEMENTS
    // let webElements = await driver.findElements(By.className('_4kny _2s24'));
    // console.log(webElements)
    // RETURNS AN ARRAY OF MATCHING WEBELEMENTS

    let elemFirst = await driver.findElement(By.css('#stories_tray > div > div > div._7kft'));
    let elemSecond = await driver.findElement(By.css('#stories_tray > div > div > div._7kft'));

    //let compareIsEqual = driver.findElement(By.css('#stories_tray > div > div > div._7kft')).equals(elemFirst, elemSecond);
    let comparision = new WebElement(driver, 'stryng');
    comparision.equals(elemFirst, elemSecond)
    console.log(comparision)
   // console.log(elemFirst.equals(elemSecond));

}
experiments();