const { By, until, Key } = require("selenium-webdriver");
class HomePage {
    async returnHomePageUrl(driver) {
        while (driver.getCurrentUrl() === 'https://www.facebook.com/login/device-based/regular/login/?login_attempt=1&lwv=110') {
        }
        return await driver.getCurrentUrl();
    };

    async closeGrayScreen(driver) {
        await driver.findElement(By.css('body > div._n8._3qx.uiLayer._3qw')).click();
    }

    async postPublish(driver) {
        var postInput = await driver.findElement(By.className('_3en1 _480e navigationFocus'));
        await postInput.click();
        await postInput.sendKeys('Test post');
        await driver.findElement(By.css('div._1j2v > div._2dck._1pek._4-u3 > div._45wg._69yt > button')).click();
    }
    async changeLanguage(driver) {
        await driver.findElement(By.css('#pagelet_rhc_footer > div > div.uiContextualLayerParent > div > div > div._4bl9 > div > a:nth-child(3)')).click();
        await driver.findElement(By.css('body > div._10.uiLayer._4-hy._3qw > div._59s7 > div > div > div > div._5lnf.uiOverlayFooter._5a8u > button')).click();
        await this.closeGrayScreen(driver);
        let languageToCompareAfterLanguageChange = this.checkLanguageText(driver, '#pagelet_rhc_footer > div > div.uiContextualLayerParent > div > div > div._4bl9 > div > a:nth-child(3)');
        return languageToCompareAfterLanguageChange;
    }
    async checkLanguageText(driver, cssSelector) {
        let languageWeWantToChangeTo = await driver.findElement(By.css(cssSelector)).getText();
        return languageWeWantToChangeTo;
    }
    async searchForUser(driver, userToSearch) {
        let fieldToTypeUser = await driver.findElement(By.className('_1frb'));
        await fieldToTypeUser.click();
        await fieldToTypeUser.sendKeys(userToSearch, Key.RETURN);
        let checkDisplayedUser = await driver.wait(until.elementLocated(By.css('#xt_uniq_1 > div._77we > div > div._6v_a > div._6v-_ > div._6v_0._4ik4._4ik5 > a')));
        console.log(checkDisplayedUser)
    }

}
module.exports = new HomePage();