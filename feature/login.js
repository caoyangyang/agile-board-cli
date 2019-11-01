const jsonfile = require('jsonfile')
const path = require('path');

exports.init = async (url,userName, password) => {
    const filePath= path.resolve(__dirname,'../config/account.json');
    const config = {url,userName,password}
    await jsonfile.writeFile(filePath, config);
}
