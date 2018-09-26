const http = require('http');
const colors = require('colors');

const RealizarPetición = (Cantidad, Numero, Feign) => {

    var options = {
        host: 'localhost',
        port: 8100,
        path: `/currency-converter${Feign}/from/EUR/to/INR/quantity/${Cantidad}`
    };
    http.get(options, function(res) {
        if (res.statusCode == 200) {
            var chunks = [];

            res.on("data", function(chunk) {
                chunks.push(chunk);
            });

            res.on("end", function() {
                var json = JSON.parse(Buffer.concat(chunks).toString());
                console.log(`Petición N°`.yellow, colors.red(Numero), 'fue atendida en puerto'.yellow, colors.red(json.port), '.Dirección web'.yellow, colors.red(options.path));
                console.log(`       Cantidad: ${colors.green(json.quantity)}, De: ${colors.green(json.from)}, A: ${colors.green(json.to)}, Resultado: ${colors.green(json.totalCalculatedAmount)}`);
            });
        } else {
            console.log("Servicio caido!");
            console.log(res.statusCode);
        }


    }).on('error', function(e) {
        console.log("Hay un error: " + e.message);
    });
}

module.exports = { RealizarPetición }