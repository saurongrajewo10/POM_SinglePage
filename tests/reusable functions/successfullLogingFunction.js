var loginPage = require('../../pages/loginPage')
var homePage = require('../../pages/homePage');
var user = require('./../users/users.json');

async function successfullLogingFunction(driver){
    await loginPage.navigateToFacebookLoginPage(driver);
    await loginPage.loginToFacebook(driver, user.email, user.password);
    await homePage.waitUntilUrlIsFacebook(driver);
    await homePage.closeGrayScreen(driver);
}

module.exports.successfullLogingFunction =  successfullLogingFunction;