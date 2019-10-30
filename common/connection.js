const JiraClient = require("jira-connector");
const jsonfile = require('jsonfile')

const file = './config/account.json'

exports.getClient = async () => {
    let accountFile = await jsonfile.readFile(file);
    return new JiraClient({
        host: 'costa-digital.atlassian.net',
        strictSSL: true,
        basic_auth: {
            username: accountFile.userName,
            password: accountFile.password
        }
    })
};
