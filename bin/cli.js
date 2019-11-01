#!/usr/bin/env node
const cli = require('cac')();
const projectOperation = require("../feature/project.js") ;
const releaseOperation = require("../feature/release.js") ;
const issueOperation = require("../feature/issue.js") ;
const loginOperation = require("../feature/login.js") ;

cli
    .command('project <operate> [...otherArgs]', 'Operate for project')
    .action((operate,otherArgs) => {
        projectOperation[operate](...otherArgs)
    });

cli
    .command('release <operate> [...otherArgs]', 'Operate for release')
    .action((operate,otherArgs) => {
        releaseOperation[operate](...otherArgs)
    });

cli
    .command('issue <operate> [...otherArgs]', 'Operate for issue')
    .action((operate,otherArgs) => {
        issueOperation[operate](...otherArgs)
    });

cli
    .command('login', 'Build files')
    .option('-url <url>', 'url')
    .option('-u <userName>', 'user')
    .option('-p <password>', 'password')
    .action((options) => {
        loginOperation.init(options.url,options.u,options.p)
    })

cli.help()
cli.version('0.0.0')

cli.parse();
