const argv = require('yargs').options({
        direccion: {
            alias: 'd',
            demand: true,
            desc: 'Escribe una direccion para obtener su clima'
        }
    })
    .help()
    .argv;

module.exports = {
    argv
}