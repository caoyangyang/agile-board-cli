const jiraOperation = require(`../jira/account.js`);
const prompt = require('prompt');

exports.run=async()=>{
    prompt.start();
    prompt.get(['type'], async function (err, result) {
        if (err) {
            console.log("prompt error", err);
        } else {
            const operationObject = getAccountOperationObject(result.type);
            operationObject.init()
        }
    });
}

getAccountOperationObject =  (boardType) => {
    switch (boardType) {
        case "jira":
            return jiraOperation;
            break;
        default:
            return jiraOperation;
    }
}