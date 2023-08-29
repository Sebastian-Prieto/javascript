// Las cookies sólo funcionan en servidores
// Las cookies son archivos que se guardan en la computadora del usuario
// Esta cookie es de tipo sesión, así que si cierro mi navegador, la cookie se irá
const createCookie = () => {
    document.cookie = 'name=Carlos; expires=1 Jan 2025 01:00:00 UTC';
}
const logIn = () => {
    const userName = prompt('Enter your name');
    document.cookie = `name=${userName}`;
    alert('Successfully logged in!')
}
let user;
const cookies2 = document.cookie.split(';');
console.log(cookies2);
cookies2.forEach((cookie) => {
    console.log(cookie);
});

// Borrar cookies sobreescribiéndolas y poniéndoles fecha en el pasado
const cerrarSesion = () => {
    document.cookie = 'nombre=; expires=1 Jan 2002 00:00:00 UTC';
}

