//Requireds
const argv = require('./config/yargs').argv;
const { BucleAleatorio, BucleUniforme } = require('./Pruebas/Bucles');

//Recuperamos el comando
let comando = argv._[0];

let Feign = argv._[1] === 'Feign' ? '-feign' : '';

switch (comando) {
    case "uniforme":
        BucleUniforme(argv.cantidad, argv.numero, Feign);
        break;
    case "aleatorio":
        BucleAleatorio(argv.cantidad, argv.base, argv.rango, Feign);
        break;
    default:
        console.log('Comando no reconocido');
}