const boton1 = document.getElementById('boton1');
const boton2 = document.getElementById('boton2');
const primeraCaja = document.querySelector('.caja');

const toggleClass = () => {
    primeraCaja.classList.add('activa');
}
boton1.addEventListener('click', () => {
    primeraCaja.addEventListener('click', toggleClass);
})

boton2.addEventListener('click', () => {
    primeraCaja.removeEventListener('click', toggleClass);
})






// Forma alternativa
// boton2.addEventListener('click', (e) => {
//     primeraCaja.classList.remove('activa');
// })