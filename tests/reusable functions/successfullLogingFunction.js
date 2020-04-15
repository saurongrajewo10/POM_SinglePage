var loginPage = require('../../pages/loginPage')
var homePage = require('../../pages/homePage');

async function successfullLogingFunction(driver){
    await loginPage.navigateToFacebookLoginPage(driver);
    await loginPage.loginToFacebook(driver, 'bomep53059@johnderasia.com', 'Test4321');
    await homePage.closeGrayScreen(driver);
}

module.exports.successfullLogingFunction =  successfullLogingFunction;