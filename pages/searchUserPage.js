const { Builder, By, Key, until } = require("selenium-webdriver");
class searchUserPage {

    async checkDisplayedSearchUser(driver) {
        const displayedUser = await driver.findElement(By.css('#xt_uniq_1 > div._77we > div > div._6v_a > div._6v-_ > div._6v_0._4ik4._4ik5 > a')).getText();
        return displayedUser;

    }

}
module.exports = new searchUserPage();