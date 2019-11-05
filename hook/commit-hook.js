const gitLog = require("../common/git-log.js");
const issueOperation = require(`../operator/interface/issue`);

const inDevStatus = "In Dev";
const readyForQaStatus = "Ready for QA";
const statusAfterInDev = ["Ready for QA", "In QA", "Ready for uat", "In UAT", "Done"]

exports.autoMoveToDev = async () => {
    const cardName =await getCard();
    const currentStatus = await issueOperation.run("showStatus", cardName)
    if (statusAfterInDev.indexOf(currentStatus) === -1 && statusAfterInDev !== inDevStatus) {
        await issueOperation.run("statusTo", cardName, inDevStatus)
    }
}

exports.devDone=async()=>{
    const cardName =await getCard();
    const currentStatus = await issueOperation.run("showStatus", cardName);
    if (currentStatus === inDevStatus) {
        await issueOperation.run("statusTo", cardName, readyForQaStatus)
    }
}

const getCard = async () => {
    const commitLog = await gitLog.showLatestLog()
    let matchCard = commitLog.subject.match(/[a-zA-Z]+\-[0-9]+/);
    return  matchCard ? matchCard[0] : null
}

