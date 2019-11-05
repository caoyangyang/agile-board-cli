const path = require('path');
const jsonfile = require('jsonfile')

const filePath = path.resolve(__dirname, './account.json');
const getAccountFunc = async () => {
    try {
        return await jsonfile.readFile(filePath);
    } catch (error) {
        return null
    }
}

exports.getType = async () => {
    return getAccountFunc().type
}

exports.getAccount = getAccountFunc

exports.setAccount=async ({type,url, userName, password}) => {
    await jsonfile.writeFile(filePath, {type, url, userName, password});
}

