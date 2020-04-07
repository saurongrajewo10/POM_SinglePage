var loginPage = require('../../pages/loginPage')
var homePage = require('../../pages/homePage');

async function successfullLogingFunction(driver){
    await loginPage.navigateToFacebookLoginPage(driver);
    await loginPage.loginToFacebook(driver, 'pnxvtavkiszxtapzfe@ttirv.org', 'Mars4321');
    await homePage.closeGrayScreen(driver);
}

module.exports.successfullLogingFunction =  successfullLogingFunction;