const config = require("../../config/config.js") ;
const jiraOperation = require(`../jira/project.js`);

exports.run=async(operate, ...args)=>{
    const operationObject = await getProjectOperationObject();
    operationObject[operate](...args)
}

getProjectOperationObject = async () => {
    const boardType = await config.getType();
    switch (boardType) {
        case "jira":
            return jiraOperation;
            break;
        default:
            return jiraOperation;
    }
}
