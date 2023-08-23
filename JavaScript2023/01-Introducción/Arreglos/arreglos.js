const myArray = ['a', 'b', 'c', 3.1416, { name: 'Sebastián'}, ['Apple', 'Watermelon', ['Onion', 'Carrot']]];
// console.log(myArray);

const friends = ['Adverick', 'Alejo', 'Alexander'];
// console.log(friends[2]);

const colors = [];
colors[0] = 'Purple';
colors[1] = 'Red';
colors[2] = 'Yellow';
colors[3] = 'Black';
colors.push('Blue');
// console.log('El arreglo contiene: ' + colors.length + ' colores.');

// Métodos para los arreglos
// .length -> Nos permite conocer la cantidad de elementos de un arreglo
const colores = ['Rojo', 'Azul', 'Blanco'];
const numeros = [1, 2, 3, 4, 5];
console.log(colores.length);
// .toString() -> Nos permite transformar un array en una cadena de texto
// document.body.innerHTML = colores.toString();
// .join() -> Nos permite transformar un array en una cadena de texto y separar cada elemento
console.log(colores.join(' - '));
// .sort() -> Nos permite ordenar un array de cadenas de texto de forma alfabética y numérica
console.log(colores.sort());
// .reverse() -> Nos permite ordenar un array de cadenas de texto de forma descendente
console.log(colores.reverse());
// .concat() -> Nos permite juntar dos arreglos en uno solo
const arreglo1 = [1, 2, 3];
const arreglo2 = ['A', 'B', 'C'];
const arreglo3 = arreglo1.concat(arreglo2);
console.log(arreglo3);
// .push() -> Nos permite agregar un elemento al final de un arreglo
colores.push('Amarillo');
console.log(colores);
// .pop() -> Nos permite eliminar el último elemento de un arreglo
colores.pop();
console.log(colores);
// .shift() -> Elimina el primer elemento de un arreglo y recorre los elementos
const guns = ['AK', 'Galil', 'M4', 'Deagle'];
console.log(guns);
const gunEliminated = guns.shift();
console.log(gunEliminated);
// .unshift() -> Agrega un elemento al inicio de un arreglo y empuja a los elementos
guns.unshift('MAC');
guns.unshift('USP');
console.log(guns);
// .splice() -> Inserta un elemento a un arreglo donde lo especifiquemos
// 1. Parámetro = Posición donde queremos insertar los elementos
// 2. Parámetro = Si queremos eliminar elementos desde la posición indicada
// Resto de parámetros = Los elementos a insertar
const amigos = ['Alejandro', 'Alexander', 'Manuel'];
amigos.splice(1, 0, 'Gelso');
console.log(amigos);
// .slice() -> Nos permite copiar una parte de un arreglo a otro
// 1. Parámetro = Posición desde donde queremos copiar
// 2. Parámetro = Hasta antes de que elemento copiar
const nuevosAmigos = amigos.slice(1, 3);
console.log(nuevosAmigos);
// .indexOf() -> Nos permite obtener el primer index de un elemento, si no hay elementos, retorna -1
const myVideoGames = ['COD', 'CSGO', 'LOL', 'Minecraft', 'WOW', 'NFS', 'LOL']
console.log(myVideoGames.indexOf('LOL'));   
// .lastIndexOf() -> Nos permite obtener el último índex de un elemento
console.log(myVideoGames.lastIndexOf('LOL')); 
// .forEach() -> Nos permite ejecutar una función por cada elemento
const mySports = ['Soccer', 'Tennis', 'Baseball', 'Volleyball'];
mySports.forEach((sport, index)=> {
    console.log(`(${index}) - Hello ${sport}`);
});
// .find() -> Nos permite recorrer un arreglo y devuelve el PRIMER elemento que retornemos
const vegetables = ['Onion', 'Carrot', 'Tomato', 'Avocado', 'Lettuce', 'OtherFruit1', 'OtherFruit2'];
// La variable tiene como función decir que va a ser igual a lo que le retorne la función
const resultado = vegetables.find((vegetable)=> {
    if (vegetable[0] === 'O') {
        return vegetable;
    }
});
console.log(resultado);

resultadoForEach = vegetables.forEach((vegetable)=> {
    if (vegetable[0] === 'O') {
        console.log(vegetable);
    }
});

// .map() -> Nos permite ejecutar una función por cada elemento y crear un nuevo arreglo en base a los
// resultados de dicha función.
const band = ['Oliver', 'Lee', 'Jordan'];
const upperBand = band.map((singer) => {
    return singer.toUpperCase();
})
console.log(upperBand);
// .filter() -> Nos permite ejecutar una función por cada elemento y crear un arreglo
// a base de los resultados de dicha función
const manCityPlayers = ['Ederson', 'Stones', 'Akanji', 'Grealish', 'Haaland', 'Pill'];
const fourLetters = manCityPlayers.filter((players) => {
    return players.length === 7;
})
console.log(fourLetters);
// .includes() -> Nos permite saber si un arreglo contiene un elemento especificado
const instruments = ['Guitar', 'Banjo', 'Piano', 'Drums'];
console.log(instruments.includes('Banjo'));
// .every() -> Nos permite ejecutar un condicional sobre cada elemento y nos
// devuelve TRUE si TODOS los elementos cumplieron la condición
const resultEvery = instruments.every((instrument) => {
    if (typeof instrument === 'string') {
        return true;
    } else {
        false;
    }
})
console.log(resultEvery);

// some() -> Nos permite ejecutar un condicional sobre cada elemento y nos
// devuelve TRUE si ALGÚN de los elementos cumplió la condición
const resultSome = instruments.some((instrument) => {
    if (typeof instrument !== 'string') {
        return true;
    } else {
        false;
    }
})
console.log('Es ' + resultSome);

























