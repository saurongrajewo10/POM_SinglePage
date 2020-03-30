var webdriver = require('selenium-webdriver');

var driver;

class HomePage {

    constructor(){
        driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build();
    }

    navigateToEUslugiHomePage(){
        driver.get('https://www.facebook.com/');
    }
}

module.exports = new HomePage();