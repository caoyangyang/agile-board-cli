const config = require("../../config/config.js") ;
const prompt = require('prompt');

exports.init = () => {
    prompt.start();
    prompt.get(['url', 'userName', 'password'], async function (err, result) {
        if (err) {
            console.log("prompt error", err);
        } else {
            await configAccount( `${result.url}`, `${result.userName}`, `${result.password}`);
        }
    });
}

const configAccount = async (url, userName, password) => {
    await config.setAccount({type:"jira", url, userName, password})
}


