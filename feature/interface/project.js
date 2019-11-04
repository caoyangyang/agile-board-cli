const config = require("../../config/config.js") ;
const jiraOperation = require(`../jira/project.js`);

exports.ls = async () => {
    const operationObject = await getOperationObject();
    operationObject.ls();
}

exports.show = async (id) => {
    const operationObject = await getOperationObject();
    operationObject.show(id)
}

exports.showReleases = async (id) => {
    const operationObject = await getOperationObject();
    operationObject.showReleases(id)
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
