#!/usr/bin/env node
const cli = require('cac')();
const accountOperation = require("../operator/interface/account.js") ;
const projectOperation = require(`../operator/interface/project.js`) ;
const releaseOperation = require(`../operator/interface/release.js`) ;
const issueOperation = require(`../operator/interface/issue.js`) ;
const commitHook = require(`../hook/commit-hook.js`) ;

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

cli.command('runCommitHook', 'move card base on commit message and current card status')
    .action(() => {
        commitHook.autoMoveToDev()
    })

cli.command('devDone', 'move card to readyForQA')
    .action(() => {
        commitHook.devDone()
    })

cli.help()
cli.version('0.0.0')
cli.parse();
