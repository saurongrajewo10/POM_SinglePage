class HomePage {
    async returnHomePageUrl(driver) {
        while (driver.getCurrentUrl() === 'https://www.facebook.com/login/device-based/regular/login/?login_attempt=1&lwv=110') {
        }
        return await driver.getCurrentUrl();
    };

}
module.exports = new HomePage();