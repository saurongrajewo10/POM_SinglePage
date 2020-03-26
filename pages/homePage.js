var webdriver = require('selenium-webdriver');

var driver;

class HomePage {

    constructor(){
        driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build();
    }

    navigateToEUslugiHomePage(){
        driver.get('https://android.zetosoftware.pl/euslugi-web/');
    }
}

module.exports = new HomePage();