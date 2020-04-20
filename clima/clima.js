const axios = require('axios');

const getClima = async(lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=b6c2979e8a74eb9aaa351c95c6915609&units=metric`)

    return resp.data.main.temp;
}



module.exports = {
    getClima
}