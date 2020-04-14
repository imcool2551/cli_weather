const inquirer = require('inquirer');
const colors = require('colors');
const KeyManager = require('../lib/KeyManager');

const key = {
    async set() {
        try {
            const keyManager = new KeyManager();
            const input = await inquirer.prompt([
                {
                    type: 'input',
                    name: 'key',
                    message: 'Enter API Key:'.green + ' https://openweathermap.org'
                }
            ])
            if (input.key !== '') {
                keyManager.setKey(input.key);
                console.log('API Key SET'.blue);
            } else {
                throw new Error('Please specify key');
            }
        } catch (err) {
            console.log(err.message.red);
        }
    },
    get() {
        try {
            const keyManager = new KeyManager();
            const key = keyManager.getKey();

            console.log('Current API Key: ', key.yellow);
        } catch (err) {
            console.log(err.message.red);
        }
        return key;
    },
    delete() {
        try {
            const keyManager = new KeyManager();
            keyManager.deleteKey();

            console.log('Key Deleted'.blue);
            return;
        } catch (err) {
            console.log(err.message.red);
        }
    }
}

module.exports = key;