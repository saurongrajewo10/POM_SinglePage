const { By, until, Key } = require("selenium-webdriver");
var webdriver = require('selenium-webdriver');

async function raportPage (testRaport) {
 driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build();
 await driver.get("C:/Users/dawidd/Desktop/POM_SinglePage/pages/testResultsPage.html");
 await testRaport.forEach(test => {
     driver.executeScript(`var div = document.createElement("div");
    div.innerHTML = "${test}";
    document.body.appendChild(div);`);
 })
 console.log(testRaport)          
    
}
//raportPage([1, 2, 3]);
module.exports.raportPage =  raportPage;