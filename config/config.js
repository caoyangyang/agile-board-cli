const path = require('path');
const jsonfile = require('jsonfile')

exports.getType = async () => {
    const file = path.resolve(__dirname, './account.json');
    let accountFile = await jsonfile.readFile(file);
    return accountFile.type.replace(/'/g, "")
}