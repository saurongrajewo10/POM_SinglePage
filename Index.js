const { TC01Loging } = require('./tests/TC01 Loging');
const { TC02PostPublishing } = require('./tests/TC02 PostPublishing');
const { TC03ChangeLanguage } = require('./tests/TC03 ChangeLanguage');
const { TC04SearchingForUser } = require('./tests/TC04 SearchingForUser');
const { TC05PostEdition } = require('./tests/TC05 PostEdition');
const { TC06Logout } = require('./tests/TC06 Logout');
const { raportPage } = require('./raportPage');

async function main(){
    const testRaport = [];
    testRaport.push(await TC01Loging());
    testRaport.push(await TC02PostPublishing());
    testRaport.push(await TC03ChangeLanguage());
    testRaport.push(await TC04SearchingForUser());
    testRaport.push(await TC05PostEdition());
    testRaport.push(await TC06Logout());
    await raportPage(testRaport);
}
main();
