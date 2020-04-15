const colors = require('colors');
const list = require('../data/list');
const { convert_C, convert_F } = require('../util/convert');
const KeyManager = require('../lib/KeyManager');
const WeatherAPI = require('../lib/WeatherAPI');

const check = {
    async print(cmd) {
        try {
            if (cmd.code) {
                const apiKey = new KeyManager().getKey();
                const api = new WeatherAPI(apiKey);
                const outputData = await api.request(cmd.code);
                if (!cmd.fer) {
                   convert_C(outputData);
                   console.log(outputData.name.green + ' ' + outputData.temp + ' C');
                }  else {
                    convert_F(outputData);
                    console.log(outputData.name.green + ' ' + outputData.temp + ' F');
                }
            } else {
                list.forEach(city => {
                    console.log(city.name.green + ' : ' + city.code.blue);
                });
            }
        } catch (err) {
            console.log(err.message.red + '@');
        }
    }
}

module.exports = check;