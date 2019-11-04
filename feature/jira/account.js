const jsonfile = require('jsonfile')
const path = require('path');
const prompt = require('prompt');

exports.init = () => {
    prompt.start();
    prompt.get(['url', 'userName', 'password'], async function (err, result) {
        if (err) {
            console.log("prompt error", err);
        } else {
            await config( `${result.url}`, `${result.userName}`, `${result.password}`);
        }
    });
}

const config = async (url, userName, password) => {
    const filePath = path.resolve(__dirname, '../../config/account.json');
    const config = {type:"jira", url, userName, password}
    await jsonfile.writeFile(filePath, config);
}


