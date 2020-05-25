var webdriver = require('selenium-webdriver');
var Alert = require('selenium-webdriver')
var loginPage = require('../pages/loginPage');
var homePage = require('../pages/homePage');
var user = require('./../tests/users/users.json');
var actions = require('selenium-webdriver/lib/input');
const { Builder, By, Key, until, Actions, mouseDown } = require("selenium-webdriver");

async function experiments() {
    driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build();
    await loginPage.navigateToFacebookLoginPage(driver);
    await loginPage.loginToFacebook(driver, user.email, user.password);
    await homePage.waitUntilUrlIsFacebook(driver);
    await homePage.closeGrayScreen(driver);

    //RETURNING BROSWER SETTINGS AND STATISTICS
    // let elo = await driver.getCapabilities();
    // console.log(elo);
    //RETURNING BROSWER SETTINGS AND STATISTICS

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
    // console.log('stryng');
    // await actions
    // // .keyDown(ALT)
    // // .keyDown(F4)
    // .mouseDown(await driver.findElement(By.css("#u_0_a > div:nth-child(1) > div:nth-child(1) > div > a > span > span")))
    // .mouseMove(await driver.findElement(By.className('_3en1 _480e navigationFocus')))
    // .mouseUp()
    // .perform();
    //    Nie działa 

    //TAKE A SCREENSHOT AND RETURN BASE ENCODED STRING (64 BASE CODED)
    // let elo = await driver.takeScreenshot();
    // console.log(elo);
    //TAKE A SCREENSHOT AND RETURN BASE ENCODED STRING (64 BASE CODED)


    //RETURN A PAGE SOURCE
    // let mordziu = await driver.getPageSource();
    // console.log(mordziu);
    //RETURN A PAGE SOURCE

 let lokejszyn = driver.findElement(By.css('#navItem_474171183259175 > a > div')).getLocation();
  console.log(lokejszyn);

}
experiments();