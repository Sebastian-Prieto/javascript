// Grosso modo, un ciclo nos permite repetir nuestro código cuantas veces necesitemos
/*
    Ciclo For 👾
    - Repite un bloque de código mientras se cumpla una condición.
    - Recibe tres expresiones
        - 1. Se ejecuta una vez antes de empezar a repetir el bloque de código. Desde dónde queremos empezar
        - 2. Una condición, mientras se cumpla se ejecutará el bloque de código
        - 3. Esta expresión se ejecuta siempre y después de que se ejecute el bloque de código
*/

// Podemos decir que la segunda expresi´ón pregunta, realiza el código y la tercera decide si sigue
for(let numero = 1; numero < 11; numero++ ) {
    // Código
    // console.log(numero);
}

// Contar del 50 al 1 con un ciclo For
for (let numero = 50; numero >= 1; numero--) {
    console.log(numero);
}
console.log('Hey!');

// Ciclo For para mostrar los nombres del Array
const nombres = ['Ariel', 'Miguel', 'Wilder', 'Esperanza'];
for (let numero = 0; numero < nombres.length; numero++) {
    console.log(nombres[numero]);
}