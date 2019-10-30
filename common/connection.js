const JiraClient = require("jira-connector");
const jsonfile = require('jsonfile');
const path = require('path');

const file =  path.resolve(__dirname,'../config/account.json');

exports.getClient = async () => {
    let accountFile = await jsonfile.readFile(file);
    return new JiraClient({
        host: accountFile.url,
        strictSSL: true,
        basic_auth: {
            username: accountFile.userName,
            password: accountFile.password
        }
    })
};
