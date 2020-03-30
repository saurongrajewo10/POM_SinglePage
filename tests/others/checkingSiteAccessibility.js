var homePage = require('./../../pages/homePage');
var webdriver = require('selenium-webdriver');

var driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build();

homePage.navigateToFacebookHomePage(driver);
