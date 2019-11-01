const JiraClient = require("jira-connector");
const jsonfile = require('jsonfile');
const fetch = require("node-fetch");
const path = require('path');

const file = path.resolve(__dirname, '../config/account.json');

getHeader = async () => {
    let accountFile = await jsonfile.readFile(file);
    return {
        'Authorization': 'Basic ' + Buffer.from(accountFile.userName + ":" + accountFile.password).toString('base64'),
        'Content-Type': "application/json"
    };
}

exports.get = async (url) => {
    let accountFile = await jsonfile.readFile(file);
    const headers = await getHeader();
    return fetch("https://" + accountFile.url + "/rest/api/2/" + url, {method: 'GET', headers})
        .then(res => res.json())
};

exports.post = async (url, data) => {
    let accountFile = await jsonfile.readFile(file);
    const headers = await getHeader();
    return fetch("https://" + accountFile.url + "/rest/api/2/" + url, {
            method: 'POST',
            headers,
            body: JSON.stringify(data)
        })
        .then(res => res.json())
};

exports.internalGet = async (url) => {
    let accountFile = await jsonfile.readFile(file);
    const headers = await getHeader();
    return fetch("https://" + accountFile.url + "/rest/internal/2/" + url, {method: 'GET', headers})
        .then(res => res.json())
};


