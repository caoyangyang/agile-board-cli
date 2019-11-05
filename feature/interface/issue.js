const config = require("../../config/config.js") ;
const jiraOperation = require(`../jira/issue.js`);


exports.run = async (operate, ...args) => {
    const operationObject = await getOperationObject();
    if(operationObject){
        operationObject[operate](...args)
    }
}

getOperationObject = async () => {
    const boardType = await config.getType();
    switch (boardType) {
        case "jira":
            return jiraOperation;
            break;
        default:
            console.log("not found your account, please config it first")
            return null;
    }
}



