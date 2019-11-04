#!/usr/bin/env node
const cli = require('cac')();
const gitLog = require("../common/git-log.js") ;
const accountOperation = require("../feature/interface/account.js") ;
const projectOperation = require(`../feature/interface/project.js`) ;
const releaseOperation = require(`../feature/interface/release.js`) ;
const issueOperation = require(`../feature/interface/issue.js`) ;
const commandGroup= {project:projectOperation,release:releaseOperation,issue:issueOperation}

Object.keys(commandGroup).forEach((commandObject => {
    cli
        .command(`${commandObject} <operate> [...otherArgs]`, 'Operate')
        .action((operate, otherArgs) => {
            commandGroup[commandObject].run(operate,...otherArgs)
        });
}))

cli
    .command('init', 'Build files')
    .action(() => {
        accountOperation.run()
    })


cli
    .command('lastCommit', 'show last git commit message')
    .action(() => {
        gitLog.showLatestLog()
    })

cli.help()
cli.version('0.0.0')
cli.parse();
