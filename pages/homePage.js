const { By } = require("selenium-webdriver");
class HomePage {
    async returnHomePageUrl(driver) {
        while (driver.getCurrentUrl() === 'https://www.facebook.com/login/device-based/regular/login/?login_attempt=1&lwv=110') {
        }
        return await driver.getCurrentUrl();
    };

    async closeGrayScreen(driver){
        await driver.findElement(By.css('body > div._n8._3qx.uiLayer._3qw')).click();
    }
}
module.exports = new HomePage();