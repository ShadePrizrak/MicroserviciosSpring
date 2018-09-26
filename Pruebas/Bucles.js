const { RealizarPetición } = require('./solicitud');

const BucleUniforme = (Cantidad, Numero, Feign) => {
    for (let i = 0; i < Cantidad; i++) {
        RealizarPetición(Numero, i + 1, Feign);
    }

}
const BucleAleatorio = (Cantidad, Min, Rango, Feign) => {
    for (let i = 0; i < Cantidad; i++) {
        var Numero = Math.random() * (Rango) + Min;
        RealizarPetición(Numero, i + 1, Feign);
    }

}
module.exports = {
    BucleUniforme,
    BucleAleatorio
};