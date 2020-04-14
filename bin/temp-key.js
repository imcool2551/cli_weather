const program = require('commander');
const key = require('../command/key');

program
    .command('set')
    .description('Set API Key -- Get at https://openweathermap.org')
    .action(key.set);

program
    .command('get')
    .description('Check Your API Key')
    .action(key.get)

program
    .command('delete')
    .description('Delete API Key')
    .action(key.delete)

program.parse(process.argv)
