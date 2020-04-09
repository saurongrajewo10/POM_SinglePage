const { By, until } = require("selenium-webdriver");

const sleep = (milliseconds) => new Promise(resolve => setTimeout(resolve, milliseconds));

class HomePage {
    async returnHomePageUrl(driver) {
        while (driver.getCurrentUrl() === 'https://www.facebook.com/login/device-based/regular/login/?login_attempt=1&lwv=110') {
        }
        return await driver.getCurrentUrl();
    };

    async closeGrayScreen(driver){
        await driver.findElement(By.css('body > div._n8._3qx.uiLayer._3qw')).click();
    }

    async postPublish(driver){
        var postInput = await driver.findElement(By.className('_3en1 _480e navigationFocus'));
        await postInput.click();
        await postInput.sendKeys('Test post' + Math.random(1,100));
        await driver.findElement(By.css('div._1j2v > div._2dck._1pek._4-u3 > div._45wg._69yt > button')).click();
    }

    async checkWhenPostAdded(driver){ 
        var whenAdded = driver.findElement(By.className('timestampContent')).getText();
        return whenAdded;
    }

    async waitUntilPostIsFound(driver){
        while (await this.checkWhenPostAdded(driver) !== 'Przed chwilą') {
        }
    }
}
module.exports = new HomePage();