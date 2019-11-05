const gitLog = require("../common/git-log.js");
const issueOperation = require(`../feature/interface/issue.js`);

const inDevStatus = "In Dev";
const statusAfterInDev = ["Ready for QA", "In QA", "Ready for uat", "In UAT", "Done"]

exports.run = async () => {
    await autoMoveToDev();
}

const autoMoveToDev = async () => {
    const commitLog = await gitLog.showLatestLog()
    let matchCard = commitLog.subject.match(/[a-zA-Z]+\-[0-9]+/);
    const cardName = matchCard ? matchCard[0] : null

    const currentStatus = await issueOperation.run("showStatus", cardName)
    if (statusAfterInDev.indexOf(currentStatus) === -1 && statusAfterInDev !== inDevStatus) {
        await issueOperation.run("statusTo", cardName, inDevStatus)
    }
}