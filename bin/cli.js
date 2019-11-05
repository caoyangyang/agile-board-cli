#!/usr/bin/env node
const cli = require('cac')();
const accountOperation = require("../operator/interface/account.js") ;
const projectOperation = require(`./operator`) ;
const releaseOperation = require(`./operator`) ;
const issueOperation = require(`./operator`) ;
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
        commitHook.run()
    })

cli.help()
cli.version('0.0.0')
cli.parse();
