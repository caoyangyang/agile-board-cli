#!/usr/bin/env node
const cli = require('cac')();
const releaseOperation = require("../feature/release.js") ;
const configOperation = require("../feature/config.js") ;

cli
    .command('release <operate>', 'Operate for release')
    .action(operate => {
        releaseOperation[operate]()
    });
cli
    .command('config', 'Build files')
    .option('-u <userName>', 'user')
    .option('-p <password>', 'password')
    .action((options) => {
        configOperation.init(options.u,options.p)
    })

cli
    .command('init <operate>', 'Operate for release')
    .action(operate => {
        configOperation[operate]()
    });

cli.help()
cli.version('0.0.0')

cli.parse();
