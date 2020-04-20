const argv = require('./config/yargs').argv;
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');


const getInfo = async(direccion) => {

    try {
        const geoData = await lugar.getLugarLatLong(direccion);
        const climaData = await clima.getClima(geoData.lat, geoData.lng);
        return `El clima de ${geoData.direccion} es de ${climaData}°C`;
    } catch (e) {
        return `No se puede determinar el clima de ${direccion}`;
    }

}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);

// lugar.getLugarLatLong(argv.direccion)
//     .then(console.log);


// clima.getClima(40.750000, -74.000000)
//     .then(console.log)
//     .catch(console.log);