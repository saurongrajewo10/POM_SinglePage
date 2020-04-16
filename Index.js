const { TC01Loging } = require('./tests/TC01 Loging');
const { TC02PostPublishing } = require('./tests/TC02 PostPublishing');
const { TC03ChangeLanguage } = require('./tests/TC03 ChangeLanguage');
const { TC04SearchingForUser } = require('./tests/TC04 SearchingForUser');
const { TC05PostEdition } = require('./tests/TC05 PostEdition');
const { TC06Logout } = require('./tests/TC06 Logout');

async function main(){
    await TC01Loging();
    await TC02PostPublishing();
    await TC03ChangeLanguage();
    await TC04SearchingForUser();
    await TC04SearchingForUser();
    await TC05PostEdition();
    await TC06Logout();
}
main();