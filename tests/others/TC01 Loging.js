var loginPage = require('../../pages/loginPage');
var webdriver = require('selenium-webdriver');

async function Loging() {
    driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build();

    await loginPage.navigateToFacebookLoginPage(driver);
    await loginPage.loginToFacebook(driver, 'dajto', 'wciapkach');
}
Loging();
