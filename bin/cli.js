#!/usr/bin/env node
const cli = require('cac')();
const projectOperation = require("../feature/project.js") ;
const configOperation = require("../feature/config.js") ;

cli
    .command('project <operate> [...otherArgs]', 'Operate for project')
    .action((operate,otherArgs) => {
        projectOperation[operate](...otherArgs)
    });
cli
    .command('config', 'Build files')
    .option('-url <url>', 'url')
    .option('-u <userName>', 'user')
    .option('-p <password>', 'password')
    .action((options) => {
        configOperation.init(options.url,options.u,options.p)
    })

cli
    .command('init <operate>', 'Operate for release')
    .action(operate => {
        configOperation[operate]()
    });

cli.help()
cli.version('0.0.0')

cli.parse();
