#!/usr/bin/env node
const program = require('commander');
const pkg = require('../package.json');

program
    .version(pkg.version)
    .command('key', 'Manage API Key') // sub-command name (temp-key.js)
    .command('check', 'Check Code | Temp') // sub-command name (temp-list.js)
    .parse(process.argv)

console.log(process.argv);
