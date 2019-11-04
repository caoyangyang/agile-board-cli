const config = require("../../config/config.js") ;
const jiraOperation = require(`../jira/release.js`);

exports.run=async(operate, ...args)=>{
    const operationObject = await getReleaseOperationObject();
    operationObject[operate](...args)
}

getReleaseOperationObject = async () => {
    const boardType = await config.getType();
    switch (boardType) {
        case "jira":
            return jiraOperation;
            break;
        default:
            return jiraOperation;
    }
}

