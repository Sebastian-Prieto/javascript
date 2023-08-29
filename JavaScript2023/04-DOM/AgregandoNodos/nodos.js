// Agregar elementos a la página
const agregarCaja = () => {
    // 1. Crear elemento - CreateElement -> Recibe como parámetro una cadena de texto con la etiqueta
    const nuevaCaja = document.createElement('div');
    // 2. Agregar texto y atributos
    nuevaCaja.innerText = 'Nueva Caja';
    nuevaCaja.setAttribute('class', 'caja activa');
    // 3. Agregar el elemento al DOM
    const contenedor = document.getElementById('contenedor1');
        // appendChild() -> Agrega un elemento al final
        // contenedor.appendChild(nuevaCaja);
        // insertAdjacentElement() -> Nos permite agregar un elemento
            // - afterbegin -> Como primer elemento
            // - beforebegin -> Antes del elemento padre
            // - beforeend -> Como último elemento
            // - afterend -> Después del elemento padre
        // contenedor.insertAdjacentElement('afterbegin', nuevaCaja);

        // replaceWith() -> Nos permite reemplazar un elemento por otro
        document.querySelector('#contenedor1 .caja').replaceWith(nuevaCaja);
}