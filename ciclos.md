# Estructuras de control - Ciclos
## While - Mientras
Esta estructura de control encapsula un blouqe de codigo que se ejecutará  N cantidad de veces _Mientras_ una codición sea _verdadera/True_
### Explicación:

1. Se evalúa la condición dentro de los paréntesis.
2. Si la condición es true, se ejecuta el código dentro de las llaves {}.
3. Después de ejecutar el código dentro del bloque, se vuelve a evaluar la condición.
4. Los pasos 2 y 3 se repiten hasta que la condición se evalúa como false.
```JavaScript
while (condición) {
  // Código que se ejecutará mientras la condición sea verdadera
}
```
## Do While - Hacer Mientras
Esta estructura de codigo es igual a la anterior, se diferencian en que el ciclo Do While siempre hará una ejecución antes de validar si su condicional es verdadera o falsa.
``` JavaScript
do {
  // Código que se ejecutará al menos una vez
} while (condición);
```
## Ciclo for

Propósito: El ciclo for es una forma más compacta y a menudo más legible de escribir ciclos cuando sabemos de antemano cuántas veces queremos ejecutar un bloque de código.
``` JavaScript
for (inicialización; condición; incremento/decremento) {
  // Código que se ejecutará en cada iteración
}
```
### Explicación:

1. Inicialización: Se ejecuta solo una vez al principio del ciclo. Aquí, generalmente se declara e inicializa una variable de contador.
2. Condición: Se evalúa al principio de cada iteración. Si la condición es true, se ejecuta el bloque de código. Si es false, el ciclo termina.
3. Incremento/decremento: Se ejecuta al final de cada iteración (después de que se ejecuta el código dentro del bloque). Aquí, generalmente se actualiza la variable de contador.
``` JavaScript
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

console.log("¡Otro conteo terminado!");
```
