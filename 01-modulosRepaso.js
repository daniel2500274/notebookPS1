const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});


function obtenerNumeros() {
    return new Promise((resolve, reject) => {
        let primerNumero;
        let segundoNumero;

        readline.question('Por favor, ingresa el primer número (X): ', (respuesta1) => {
            if (respuesta1 === null) {
                console.log("No ingresaste el primer número. Inténtalo de nuevo.");
                readline.close();
                resolve(null);
                return;
            }
            const num1 = parseFloat(respuesta1);
            if (isNaN(num1)) {
                console.log("El primer valor ingresado no es un número válido. Inténtalo de nuevo.");
                readline.close();
                resolve(null);
                return;
            }

            primerNumero = num1;
            readline.question('Por favor, ingresa el segundo número (Y): ', (respuesta2) => {
                if (respuesta2 === null) {
                    console.log("No ingresaste el segundo número. Inténtalo de nuevo.");
                    readline.close();
                    resolve(null);
                    return;
                }
                const num2 = parseFloat(respuesta2);
                if (isNaN(num2)) {
                    console.log("El segundo valor ingresado no es un número válido. Inténtalo de nuevo.");
                    readline.close();
                    resolve(null);
                    return;
                }
                segundoNumero = num2;
                readline.close();
                resolve({ x: primerNumero, y: segundoNumero });
            });
        });
    });
}

function calcularModulo(datos) {
    if (datos === null || typeof datos.x !== 'number' || typeof datos.y !== 'number') {
        console.error("Error: Se recibieron datos inválidos para calcular el módulo.");
        return null;
    }

    const numero1 = datos.x;
    const numero2 = datos.y;

    if (numero2 === 0) {
        console.log("¡Error! No se puede calcular el módulo si el segundo número (el divisor) es cero.");
        return null;
    }

    const modulo = numero1 % numero2;

    return modulo;
}



