class HomePage {
    navigateToFacebookHomePage(driver){
        driver.get('https://www.facebook.com/');
    }
}

module.exports = new HomePage();