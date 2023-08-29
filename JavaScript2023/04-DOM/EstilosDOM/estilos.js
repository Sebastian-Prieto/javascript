// Modificar estilos mediante clases
// classList -> Lista las clases del elemento
const primeraCaja = document.querySelector('#contenedor1 .caja');
const agregarClase = () => {
    // classList.add -> Nos permite agregar una clase
    primeraCaja.classList.add('activa');
}
const eliminarClase = () => {
    // classList.remove -> Nos permite eliminar una clase
    primeraCaja.classList.remove('activa');
}
const toggleClass = () => {
    // Alterna entre clases
    // Si la tiene, la quita, si no la tiene, la agrega
    primeraCaja.classList.toggle('activa');
}
const comprobarClase = () => {
    // classList.contains() -> Nos permite comprobar si el elemento tiene una clase o no
    if (primeraCaja.classList.contains('activa')) {
        console.log('La caja tiene la clase activa');
    } else {
        console.log('La caja no tiene la clase activa');
    }
        console.log('La caja tiene la clase activa y contiene las siguientes clases:');
        primeraCaja.classList.forEach((clase) => {
            console.log(clase);
        })
}
// Modificar estilos mediante inline styles.
const ultimaCaja = document.querySelector('#contenedor2 .caja:last-child');
ultimaCaja.style.background = '#222';
ultimaCaja.style.color = '#fff';

const cajas = document.querySelectorAll('.caja');
let tamaño = 24; 
 
const incrementarFuente = () => {
    cajas.forEach((caja) => {
        caja.style.fontSize = `${tamaño + 1}px`;
        tamaño++;
    })
}
const disminuirFuente = () => {
    cajas.forEach(caja => {
        caja.style.fontSize = `${tamaño - 1}px`;
        tamaño--;
    })
}


