const { Builder, By, Key, until } = require("selenium-webdriver");

class FailedLoginPage {
    async returnFailedLoginPageUrl(driver) {
        await driver.wait(until.urlIs('https://www.facebook.com/login/device-based/regular/login/?login_attempt=1&lwv=110'));
        return await driver.getCurrentUrl();
    };
    
    async loginToFacebook(driver, email, password) {
        await driver.findElement(By.css('#email')).sendKeys(email);
        await driver.findElement(By.css('#pass')).sendKeys(password);
        await driver.findElement(By.css('#loginbutton')).click();
    };

    async returnLoginErrorStatement(driver) {
        return await driver.findElement(By.css('#globalContainer > div.uiContextualLayerPositioner._572t.uiLayer > div > div > div')).getText();
    };

}
module.exports = new FailedLoginPage();