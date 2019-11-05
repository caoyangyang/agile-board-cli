const config = require("../config/config.js") ;
const fetch = require("node-fetch");

getHeader = async () => {
    let accountFile = await config.getAccount();
    return {
        'Authorization': 'Basic ' + Buffer.from(accountFile.userName + ":" + accountFile.password).toString('base64'),
        'Content-Type': "application/json"
    };
}

exports.get = async (url) => {
    let account =  await config.getAccount();
    const headers = await getHeader();
    return fetch("https://" + account.url + "/rest/api/2/" + url, {method: 'GET', headers})
        .then(res => res.json())
};

exports.post = async (url, data) => {
    let account =  await config.getAccount();
    const headers = await getHeader();
    return fetch("https://" + account.url + "/rest/api/2/" + url, {
            method: 'POST',
            headers,
            body: JSON.stringify(data)
        })
        .then(res => {
           return  res.status===200?res.json():res
        })
};

exports.internalGet = async (url) => {
    let account =  await config.getAccount();
    const headers = await getHeader();
    return fetch("https://" + account.url + "/rest/internal/2/" + url, {method: 'GET', headers})
        .then(res => res.json())
};


