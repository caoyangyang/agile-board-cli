const runExec = require('./run-exec')
const prettyFormat = ["%h", "%H", "%s", "%f", "%b", "%at", "%ct", "%an", "%ae", "%cn", "%ce", "%N", ""]

const getCommandString = splitCharacter =>
    'git log -1 --pretty=format:"' + prettyFormat.join(splitCharacter) + '"' +
    ' && git rev-parse --abbrev-ref HEAD' +
    ' && git tag --contains HEAD'
const splitCharacter = '<##>'

exports.showLatestLog = async () => {
    const command = getCommandString(splitCharacter)
    const commandResponse = await runExec(command);

    const outputResult = commandResponse.split(splitCharacter);
    const branchAndTags = outputResult[outputResult.length - 1].split('\n').filter(n => n)
    const branch = branchAndTags[0]
    const tags = branchAndTags.slice(1)
    const result = {
        shortHash: outputResult[0],
        hash: outputResult[1],
        subject: outputResult[2],
        sanitizedSubject: outputResult[3],
        body: outputResult[4],
        authoredOn: outputResult[5],
        committedOn: outputResult[6],
        author: {
            name: outputResult[7],
            email: outputResult[8],
        },
        committer: {
            name: outputResult[9],
            email: outputResult[10]
        },
        notes: outputResult[11],
        branch,
        tags
    };
    return result;
}