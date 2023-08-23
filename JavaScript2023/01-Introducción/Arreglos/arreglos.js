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
amigos.indexOf = ['Gelso'];
console.log(amigos);