const jsonfile = require('jsonfile')

exports.init = async (userName, password) => {
    const filePath = './config/account.json'
    const config = {userName,password}
    await jsonfile.writeFile(filePath, config);
}
