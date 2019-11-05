const path = require('path');
const jsonfile = require('jsonfile')

const getAccountFunc = async () => {
    const file = path.resolve(__dirname, './account.json');
    try {
        return await jsonfile.readFile(file);
    } catch (error) {
        return null
    }

}

exports.getType = async () => {
    return getAccountFunc().type
}

exports.getAccount = getAccountFunc

