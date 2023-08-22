// Los parámetros son los que ponemos al definir la función
// Los argumentos son los que pasamos al invocar la función

const greeting = (name) => {
    console.log(`Hello, ${name}`);
}
greeting('Pedro');

// Múltiples parámetros
const sum = (num1, num2) => {
    console.log(num1 + num2);
}
sum(1, 2);

// Ejercicio
const calculator = (type, num1, num2) => {
    if (type === '+') {
        console.log(num1 + num2);
    } else if (type === '-') {
        console.log(num1 - num2);
    }
}
calculator('-', 12, 10); // 2
calculator('+', 13, 10); // 23