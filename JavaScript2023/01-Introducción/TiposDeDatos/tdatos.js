// Cadenas de texto
const paragraph = "This is a 'quote'"
const paragraph2 = 'This is a "quote"'
const paragraph3 = "This is a \"quote\"" // Escapar de comillas
console.log(paragraph)
console.log(paragraph2)
console.log(paragraph3)

// Números
const pi = 3.14146;
const number = 68;
const negativeNumber = -68;

// Booleanos
const isActive = true;
const isOnline = false;

// Arrays
const fruits = ["Apple", "Pineapple", "Grapes", 23, { lastname: "Prieto" } [1, 2, 3]];
console.log(fruits);

// Objetos
// Guarda la información en parejas: Clave y valor
const person = {
    name: 'Sebastián',
    lastname: 'Prieto',
    age: 20,
    country: 'Colombia',
    pets: {
        name: 'Hannah',
        color: 'Orange',
        type: 'Cat',
    }
};
console.log(person)

// Funciones
function sayHi() {
    console.log("Hey!")
}
sayHi();
// Las funciones se definen y se ejecutan

// Null - Se usan para definir un valor que sea nulo
const variableNull = null;

// Undefined - Se usa para indicar que un valor no está definido, pero no lo establezco yo
const variableUndefined = undefined;