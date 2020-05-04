const { By, until, Key } = require("selenium-webdriver");
var webdriver = require('selenium-webdriver');
var path = require("path");

async function raportPage(testRaport) {
    driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build();
    var absolutePath = path.resolve("testResultsPage.html");
    await driver.get(absolutePath);
    await testRaport.forEach(test => {
        let tag;
        if (test.isSuccessful) {
            tag = "true";
        }
        else {
            tag = "false";
        }
        driver.executeScript(`var div = document.createElement("${tag}");
    div.innerHTML = "${test.message}";
    document.body.appendChild(div);
    var br = document.createElement("br");
    document.body.appendChild(br);`);
    })
    console.log(testRaport)

}
// raportPage([{ message: "TC01 successful - TC01 Loging", isSuccessful: true }, { message: "TC02 failed - TC02 Post Publishing", isSuccessful: false }]);
module.exports.raportPage = raportPage;