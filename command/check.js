const colors = require('colors');
const list = require('../data/list');
const { toC, toF } = require('../util/convert');
const KeyManager = require('../lib/KeyManager');
const WeatherAPI = require('../lib/WeatherAPI');

// Redis Config
const redis = require('redis');
const client = redis.createClient();
const hashKey = 'myhash';

async function apiCall(cmd, api) {
    const { name, temp } = await api.request(cmd.code);
    const obj = {
        name: name,
        tempC: toC(temp) + ' C',
        tempF: toF(temp) + ' F'
    };
    client.hset(hashKey, cmd.code, JSON.stringify(obj));
    client.setex(cmd.code, 600, name);
}

function print(name, temp) {
    console.log(name.green + ' is now ' + temp.yellow);
}


const check = {
    async get(cmd) {
        try {
            if (cmd.code) {
                const apiKey = new KeyManager().getKey();
                const api = new WeatherAPI(apiKey);

                if (!client.exists(cmd.code)) {
                    await apiCall(cmd, api);
                } 
                client.hget(hashKey, cmd.code, (err, data) => {
                    if (err)
                        throw err;
                    const obj = JSON.parse(data);
                    if (cmd.fer) {
                        print(obj.name, obj.tempF);
                    } else {
                        print(obj.name, obj.tempC);
                    }
                    process.exit();
                })
            } else {
                list.forEach(city => {
                    console.log(city.name.green + ' : ' + city.code.blue);
                });
                process.exit();
            }
        } catch (err) {
            console.log(err.message.red);
            process.exit();
        } 
    }
}

module.exports = check;