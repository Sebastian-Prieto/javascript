// getElementById() -> Nos permite obtener un elemento en base a su atributo ID
const contenedor1 = document.getElementById('contenedor1');
// console.log(contenedor1);
// Children -> Nos permite obtener los elementos hijos
// console.log(contenedor1.children);
// parentElement -> Nos permite obtener el elemento padre
// console.log(contenedor1.parentElement);
// getElementByTagName -> Nos permite obtener una colección de elementos en base a la etiqueta
// Nota: Devuelve una colección HTML. Una colección no es un arreglo.
const divs = document.getElementsByTagName('div');
// console.log(divs);
// getElementByClassName -> Nos permite obtener una colección de elementos en base a su clase de CSS
// Nota: Devuelve una colección HTML
const contenedores = document.getElementsByClassName('contenedor');
// console.log(contenedores);
// querySelector() -> Nos devuelve el PRIMER elemento que coincida con un selector de estilo CSS
// Nota: Devuelve un NodeList
const caja = document.querySelector('#contenedor1 .caja');
// console.log(caja);
// querySelectorAll() -> Nos permite obtener una colección de elementos en base a un selector CSS
// Nota: Devuelve un NodeList
const cajas = document.querySelectorAll('#contenedor1 .caja');
// console.log(cajas);
cajas.forEach((caja) => {
    // console.log(caja);
})
// closest() -> Nos permite buscar de adentro hacia afuera en busca de un elemento
const lastBox = document.querySelector('.caja:last-child')
// console.log(lastBox.closest('.contenedor-principal'));
// Podemos encadenar métodos para obtener elementos
const contenedor2 = document.getElementById('contenedor2');
// console.log(contenedor2.querySelector('.caja'));
// Modificar elementos del DOM
// elemento.innerHTML -> Nos permite cambiar el contenido HTML de un elemento
const primeraCaja = document.querySelector('.caja');
primeraCaja.innerHTML = '<b>Hey!</b>';
// Modificar atributos del elemento
// elemento.attribute -> Nos permite acceder y cambiar atributos del elemento
primeraCaja.id = 'nuevo-id';
// elemento.setAttribute() -> Nos permite agregar o establecer el valor de un atributo del elemento
primeraCaja.setAttribute('class', 'caja activa');
primeraCaja.setAttribute('data-id', '123-456-789'); 
// Modificar estilos CSS
// elemento.style.property -> Nos permite cambiar los estilos CSS de un elemento
const contenedor2caja1 = document.querySelector('#contenedor2 .caja');
console.log(contenedor2caja1); 
contenedor2caja1.style.background = '#222';
contenedor2caja1.style.color = '#fff';
contenedor2caja1.style.textTransform = 'uppercase';