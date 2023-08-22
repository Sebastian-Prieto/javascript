let edad = 20;
console.log(edad);
/* 
    📎Tipos de datos que se pueden almacenar en una variable
    - String: Cadenas de texto "Pedro"
    - Number: Números con y sin punto flotante 12312/2.02
    - Boolean: Verdadero o falso True/False
    - Object: Objetos como
        student = {
            name: "Sebastián",
            lastname: "Prieto",
            age: 20,
        };
    - Null: Elementos de valor Nulo
    - Undefined: Valor sin definir
*/

let id, name, country;
id = 1221;
name = 'Sebastián'
country = 'Colombia'
console.log('Hola, mi nombre es ' + name + ' y soy de ' + country);

let miVariable = 'Hey!';
miVariable = 7;
console.log(miVariable);

// Scope de las variables
/* Scope global
    - Son declaradas fuera de una función
    - Se puede acceder a ellas desde cualquier parte del código
    - Se puede usar const, let o var
*/
var globalScope = true;
const global = () => {
    globalScope = false;
    console.log(`Hola, ${globalScope}`);
}
global();
/* Scope local
    - Son las variables declaradas dentro de una función
    - Sólo podemos acceder a ellas desde dentro de la función
*/
var number = 1;
var getNLetters = (name) => {
    var number = name.length;
    console.log(`${name} tiene ${number} letras.`);

    var funcionAnidada = (number) => {
        console.log(`${number}`);
    }
    funcionAnidada();
};
getNLetters('Sebastián');
// console.log(number);

/* Scope de bloque
    - Pertenecen las variables declaradas con const o let dentro de un bloque {}
    - Sólo se puede acceder a ellas desde dentro del bloque
*/
