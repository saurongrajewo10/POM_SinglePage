const { By, until, Key } = require("selenium-webdriver");
class HomePage {
    async returnHomePageUrl(driver) {
        while (driver.getCurrentUrl() !== 'https://www.facebook.com/') {
        }
        return await driver.getCurrentUrl();
    };

    async waitUntilUrlsFacebook(driver) {
        await driver.wait(until.urlIs('https://www.facebook.com/'));
        return;
    }

    async closeGrayScreen(driver) {
        await driver.wait(until.elementLocated(By.css('body > div._n8._3qx.uiLayer._3qw'))).click();
    }

    async postPublish(driver) {
        var postInput = await driver.findElement(By.className('_3en1 _480e navigationFocus'));
        await postInput.click();
        await postInput.sendKeys('Test post' + Math.random(1, 100));
        await driver.findElement(By.css('div._1j2v > div._2dck._1pek._4-u3 > div._45wg._69yt > button')).click();
    }

    async postEdition(driver, newPostValue) {
        await driver.findElement(By.className('_4xev _p')).click();
        let editButton;
        if (await this.wasPostEdited(driver)) {
            editButton = await driver.findElement(By.xpath('/html/body/div[1]/div[3]/div[3]/div/div/div/ul/li[7]/a'));
        } else {
            editButton = await driver.findElement(By.xpath('/html/body/div[1]/div[3]/div[3]/div/div/div/ul/li[6]/a'));
        }
        await editButton.click();
        await driver.findElement(By.css('div._i-o > div > div._7r84 > div > div._4bl9 > div > div > div > div > div > div > div > div > div > div > div > span > span')).
            sendKeys(Key.chord(Key.CONTROL, 'a'), newPostValue);
        await driver.findElement(By.css('div._1j2v > div._2dck._4-u3._57d8 > div > div._ohf.rfloat > div > button')).click();
    }

    async getPostValue(driver) {
        let postValue = await driver.findElement(By.className('_5pbx userContent _3ds9 _3576')).getText();
        return postValue;
    }

    async wasPostEdited(driver) {
        var buttonText6 = await driver.findElement(By.xpath('/html/body/div[1]/div[3]/div[3]/div/div/div/ul/li[6]')).getText();
        if (buttonText6 === 'Pokaż historię edycji') {
            return true;
        } else {
            return false;
        }
    }

    async waitUntilPostIsEdited(driver, newPostValue) {
        await driver.wait(until.elementTextIs(await driver.findElement(By.className('_5pbx userContent _3ds9 _3576')), newPostValue));
        return;
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
    }

    async checkWhenPostAdded(driver) {
        var whenAdded = driver.findElement(By.className('timestampContent')).getText();
        return whenAdded;
    }

    async waitUntilPostIsFound(driver) {
        await driver.wait(until.elementTextIs(await driver.findElement(By.className('timestampContent')), 'Przed chwilą'));
        return;
    }

    async logout(driver) {
        await driver.findElement(By.css('#userNavigationLabel')).click();
        await driver.findElement(By.css('div > div > ul > li._54ni.navSubmenu._6398._64kz.__MenuItem > a > span > span')).click();
    }

}
module.exports = new HomePage();