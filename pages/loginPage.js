class LoginPage {
    navigateToFacebookLoginPage(driver){
        driver.get('https://www.facebook.com/');
    }
}

module.exports = new LoginPage();