// Eliminar elementos en el DOM
const eliminarCaja = () => {
    const padre = document.getElementById('contenedor1');
    const cajaEliminar = padre.querySelector('.caja');
    // removeChil() -> Nos permite eliminar un elemento hijo
    if(cajaEliminar) {
        padre.removeChild(cajaEliminar);
    }
}