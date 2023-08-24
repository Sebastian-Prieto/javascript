// .length -> Es una propiedad para conocer cuántos caracteres tiene una cadena de texto
const text = 'Hola, soy Pedro';
console.log(text.length);
// .indexOf() && .lastIndexOf() -> Devuelve el index del primer/último caracter especificado
const text2 = 'Hola, soy Pablo';
const lastIndexOf = text2.lastIndexOf('l');
console.log(lastIndexOf);
// .slice() -> Devuelve un fragmento de una cadena de texto
// 1. Index desde dónde queremos cortar
// 2. Index hasta donde queremos cortar (opcional)
const textSlice = text2.slice(10);
console.log(textSlice);
// .replace() -> Devuelve una cadena de texto en donde se reemplaza un valor por otro.
// 1. El texto que queremos reemplazar
// 2. El texto que queremos poner
const sistersName = 'María Fernanda Prieto Vargas';
const newSistersName = sistersName.replace('Vargas', 'López');
console.log(newSistersName);
// .split() -> Convierte una cadena de texto en un arreglo.
// Tenemos que especificar dónde cortar cada elemento.
// 1. Parámetro funcionará como separador
const newName = 'Hola mi nombre es Sebastián'; 
console.log(newName.split('-'));
// .toUpperCase() / .toLowerCase() -> Devuelve un texto en minúsculas o mayúsculas
console.log(newName.toUpperCase()); 
console.log(newName.toLowerCase());
// -------------------------------------------------------------------------------
// Métodos para números
// .toString() -> Permite transformar un número a un texto
const num = 10;
console.log(num, typeof num);
console.log(num.toString(), typeof num.toString());
// .toFixed() -> Permite obtener un número con la cantidad de decimales deseados
const num2 = 3.14161718;
console.log(num2.toFixed(0));
// .parseInt() -> Intentará transformar un valor a un entero
const num3 = '313';
console.log(parseInt(num3));
// .parseFloat() -> Intentará transformar un valor a un flotante
const num4 = '1.222';
console.log(parseFloat(num4));
// Math.random() -> Generará un número al azar entre 0 y 1
const num5 = Math.random();
console.log(num5);
// Math.floor() -> Redondea hacia abajo un número
console.log(Math.floor(10.211));
// Math.ceil() -> Redondea hacia arriba un número
console.log(Math.ceil(10.211));
// Math.round() -> Redondea hacia el entero más cercano
console.log(Math.round(10.211));

// Número de 0 a 100
const randomNumber = Math.random();
console.log(Math.floor(randomNumber * 101));