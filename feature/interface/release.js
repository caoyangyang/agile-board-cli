const config = require("../../config/config.js") ;
const jiraOperation = require(`../jira/release.js`);


exports.show = async (id) => {
    const operationObject = await getOperationObject();
    operationObject.show(id)
}

exports.showIssues=async (id) => {
    const operationObject = await getOperationObject();
    operationObject.showIssues(id)
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

