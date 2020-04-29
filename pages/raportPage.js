const { By, until, Key } = require("selenium-webdriver");
var webdriver = require('selenium-webdriver');

async function raportPage(testRaport) {
    driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build();
    await driver.get("C:/Users/dawidd/Desktop/POM_SinglePage/pages/testResultsPage.html");
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
//raportPage([1, 2, 3]);
module.exports.raportPage = raportPage;