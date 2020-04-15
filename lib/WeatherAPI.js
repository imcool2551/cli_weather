const axios = require('axios');
const colors = require('colors');

class WeatherAPI {
    constructor(key) {
        this.apiKey = key;
        this.baseURL = 'https://api.openweathermap.org/data/2.5/weather';
    }

    async request(code) {
        try {
            const res = await axios.get(this.baseURL, {
                params: {
                    id : code,
                    appid : this.apiKey
                }
            });       
            return {'name': res.data.name, 'temp': res.data.main.temp};
        } catch (err) {
            throw new Error('API Request Error');
        }
    }
}

module.exports = WeatherAPI;