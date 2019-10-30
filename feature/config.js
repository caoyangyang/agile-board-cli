const jsonfile = require('jsonfile')
const path = require('path');

exports.init = async (userName, password) => {
    const filePath= path.resolve(__dirname,'../config/account.json');
    const config = {userName,password}
    await jsonfile.writeFile(filePath, config);
}
