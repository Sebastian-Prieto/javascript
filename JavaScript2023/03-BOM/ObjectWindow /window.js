/* 
    window.open();
    Nos permite abrir ventanas de navegador. Es posible que el navegador solicite permiso para hacerlo.
    1. Dirección web de la nueva ventana.
    2. Nombre de la ventana.
    3. Cadena de texto de opciones.
    Nos devuelve un objeto para acceder a esa ventana.
*/
let myWindow;
const openWindow = () => {
    myWindow = window.open('https://google.com', 'My new window', 'width=800, height=800');
    myWindow.document.write('Hello, this is my new window!')
}
const closeWindow = () => {
    myWindow.close();
}
console.log('Este es el ancho de mi pantalla: ', window.screen.availWidth);
console.log('Este es el alto de mi pantalla: ', window.screen.availHeight);

