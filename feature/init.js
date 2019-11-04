const jsonfile = require('jsonfile')
const path = require('path');
const prompt = require('prompt');

exports.init = () => {
    prompt.start();
    prompt.get(['type', 'url', 'userName', 'password'], async function (err, result) {
        if (err) {
            console.log("prompt error", err);
        } else {
            await config(`${result.type}`, `${result.url}`, `${result.userName}`, `${result.password}`);
        }
    });
}

const config = async (type, url, userName, password) => {
    const filePath = path.resolve(__dirname, '../config/account.json');
    const config = {type, url, userName, password}
    await jsonfile.writeFile(filePath, config);
}


