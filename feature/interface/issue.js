const config = require("../../config/config.js") ;
const jiraOperation = require(`../jira/issue.js`);


exports.show = async (idOrKey) => {
    const operationObject = await getOperationObject();
    operationObject.show(idOrKey)
}

exports.showHistory = async (idOrKey) => {
    const operationObject = await getOperationObject();
    operationObject.showHistory(idOrKey)
}

exports.showStatus = async (idOrKey) => {
    const operationObject = await getOperationObject();
    operationObject.showStatus(idOrKey)
}

exports.statusTo = async (idOrKey, statusId) => {
    const operationObject = await getOperationObject();
    operationObject.statusTo(idOrKey, statusId)
}

getOperationObject = async () => {
    const boardType = await config.getType();
    switch (boardType) {
        case "jira":
            return jiraOperation;
            break;
        default:
            return jiraOperation;
    }
}



