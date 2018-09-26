const cantidad = {
    default: 10,
    alias: 'c',
    desc: 'El número de peticiones'
};

const numero = {
    default: 1000,
    alias: 'n',
    desc: 'La cantidad a convertir'
};

const base = {
    alias: 'b',
    default: 800,
    desc: 'La base para determinar la cantidad aleatoria a convertir'
}

const rango = {
    alias: 'r',
    default: 1000,
    desc: 'El rango de variación del número aleatorio a convertir'
}


const argv = require('yargs')
    .command('uniforme', 'Las solicitudes tienen una misma cantidad', {
        cantidad,
        numero
    })
    .command('aleatorio', 'Las solicitudes tienen una cantidad variable', {
        cantidad,
        base,
        rango
    })
    .help()
    .argv;

module.exports = {
    argv
}