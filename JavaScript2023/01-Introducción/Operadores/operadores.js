// /* Operadores aritméticos
//     - = Operador de asignación
//     - + Operador de suma
//     - - Operador de resta
//     - * Operador de multiplicación
//     - / Operador de división
//     - % Operador de módulos
//         const result = 10 % 3;
//         console.log(result);
//     - ++ Operador de aumento
//     - -- Operador de disminución
// */

// let num = 1;
// num++;
// let num2 = 2;
// num2--;
// console.log(num);
// console.log(num2);

// /*  Operadores de asignación
//     += Suma un número al valor de una variable
//     -= Resta un número al valor de una variable
//     *= Multiplica un número al valor de una variable
//     /= Divide un número al valor de una variable
//     %= Obtiene el sobrante de una división y lo asigna a una variable
// */

// let number = 10;
// number += 15;
// console.log(number);

// /* Operadores de comparación
//     == Igual que
//     === Igual en valor y tipo de valor
//     != Diferente de
//     !== Diferente de en valor y tipo de valor
//     < Mayor que
//     > Menor que
//     >= Mayor o igual que
//     <= Menor o igual que
//     ? Operador ternario
// */

// const n1 = 10 == 10; // True
// console.log(n1);
// const n2 = 10 == "10"; // True
// console.log(n2);
// const n3 = 10 === "10"; // False
// console.log(n3);
// // Es importante recordar que el triple igual compara tipo de dato y valor de dato

// const result = 7 > 1 ? 'El primer valor es mayor que el segundo' : 'El segundo valor es menor que el primero';
// console.log(result);
// // Funciona como un condicional. ? = Por lo tanto, guarda un valor. : De lo contrario, guarda otro.

// /* Operadores lógicos
//     && AND
//     || OR
//     ! NOT
// */ 

// const user = "Sebastián";
// const userAge = 13;
// const haveEntry = true;

edad = prompt("Enter your age: ");
const allowAccess = true ? edad >=18 : allowAccess = false;

if (allowAccess === true)  {
    alert("Welcome! 🤠");
} else {
    alert("You don't have access to the concert. 🥶");
}

// const allowAccess = true ? userAge >=18 : allowAccess = false;
// console.log(allowAccess);