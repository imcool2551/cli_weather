const program = require('commander');
const check = require('../command/check')

program
    .description('Output codes or temp')
    .option('-c, --code <code>', 'Enter City Code')
    .option('-f, --no-fer', 'Print in celcuis')
    .action(cmd => check.print(cmd))

program.parse(process.argv);