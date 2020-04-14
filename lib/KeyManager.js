const pkg = require('../package.json');
const ConfigStore = require('configstore');

class KeyManager {
    constructor() {
        this.conf = new ConfigStore(pkg.name);
    }

    setKey(key) {
        this.conf.set('apiKey', key);
        return key;
    }

    getKey() {
        const key = this.conf.get('apiKey');

        if (!key) {
            throw new Error('No API Key Found - Get a key at https://openweathermap.org');
        }
        
        return key;
    }

    deleteKey() {
        const key = this.conf.get('apiKey');

        if (!key) {
            throw new Error('No API Key Found - Get a key at https://openweathermap.org');
        }

        this.conf.delete('apiKey');

        return;
    }
}

module.exports = KeyManager;