const { Builder, By, Key, until } = require("selenium-webdriver");
class LoginPage {
    async navigateToFacebookLoginPage(driver) {
        await driver.get('https://www.facebook.com/');
    }
    
    async loginToFacebook(driver, email, password) {
        await driver.findElement(By.css('#email')).sendKeys(email);
        await driver.findElement(By.css('#pass')).sendKeys(password);
        await driver.findElement(By.css('#u_0_b')).click();
    }

}
module.exports = new LoginPage();