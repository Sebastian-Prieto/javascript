// getElementById() -> Nos permite obtener un elemento en base a su atributo ID
const contenedor1 = document.getElementById('contenedor1');
console.log(contenedor1);
// Children -> Nos permite obtener los elementos hijos
console.log(contenedor1.children);
// parentElement -> Nos permite obtener el elemento padre
console.log(contenedor1.parentElement);
// getElementByTagName -> Nos permite obtener una colección de elementos en base a la etiqueta
// Nota: Devuelve una colección HTML. Una colección no es un arreglo.
const divs = document.getElementsByTagName('div');
console.log(divs);
// getElementByClassName -> Nos permite obtener una colección de elementos en base a su clase de CSS
// Nota: Devuelve una colección HTML
const contenedores = document.getElementsByClassName('contenedor');
console.log(contenedores);