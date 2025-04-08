// While = mientras
/* mientras tenga dinero en la cuenta, vamos a comprar X articulos*/
saldoCuenta=3
while (saldoCuenta >0) {  //     true/verdadero
    // While -> tenemos que romper la condición (que se vuelva false)
    console.log(saldoCuenta)
    saldoCuenta--  //++ incremento -- decremento
}
// Do
saldoCuenta=3
do {
    //     true/verdadero
    // Do While -> tenemos que romper la condición (que se vuelva false)
    console.log("El saldo de la cuenta es: " + saldoCuenta)
    saldoCuenta--  // el ultimo paso es romper la condición
} while (saldoCuenta >0);
// i j
// index-1 index-2

for (let i=0; i<=4; i++) {
    console.log(i)
}

console.log("¡Otro conteo terminado!");