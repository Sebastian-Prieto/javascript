// addEventListener() -> Nos permite decirle al navegador que se quede escuchando
// a cuando hagamos algo sobre el botón
// 1. El primer argumento se queda escuchando el click
// 2. Retorna algo a través de un callback
const boton1 = document.getElementById('boton1');
const primeraCaja = document.querySelector('.caja');
boton1.addEventListener('click', (event) => { // El segundo parámetro es la respuesta del usuario
    primeraCaja.classList.toggle('activa');
});
// Agregando un evento a múltiples elementos
// Podemos agregar un evento a múltiples elementos recorriéndolos mediante un ciclo
// Nota: No es la forma óptima
const cajas = document.querySelectorAll('.caja');
cajas.forEach((caja) => {
    caja.addEventListener('click', (e) => {
        console.log(`Haz hecho click en la ${e.target.innerHTML}`);
    })
})

// La propagación de eventos es un comportamiento que tiene el navegador
// Si agregamos un evento al contenedor, se lo pasa a los hijos
// Para detener la propagación, hacemos uso de e.stopPropagation();
// Debemos tener en cuenta que se le aplica a un hijo
const contenedor = document.getElementById('contenedor1');
contenedor.addEventListener('click', (e) => {
    console.log('Hiciste click en el contenedor');
}, true)
// Propagación tipo bubbling (false (por defecto))
// En esta, se ejecuta el hijo primero y después el del contenedor
// Ese valor solo se pone en el contenedor
// Propagación tipo capturing (true)
// Primero, se ejecuta el evento del contenedor y luego el del hijo
