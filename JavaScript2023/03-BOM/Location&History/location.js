// HREF - Retorna la URL de la página actual
console.log(window.location.href);
// Hostname - Retorna el host de la página actual
console.log(window.location.hostname);
// Pathname - Retorna el path de la página actual con archivo
console.log(window.location.pathname);
// Protocol - Retorna el protocolo de la página actual
console.log(window.location.protocol);
// Cargar documento
const loadDocument = () => {
    location.assign('https://www.youtube.com/')
}
// History nos permite acceder a los botones del navegador
const regresar = () => {
    history.back();
}
const ir = () => {
    history.forward();
}