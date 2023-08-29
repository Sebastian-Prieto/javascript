// Alerta normal
window.alert('Hello, user');
// Alerta de confirmación - Retorna falso o verdadero dependiendo de la respuesta
const login = () => {
    const answer = confirm('¿Eres mayor de edad?');
    if (answer === true) {
        console.log('Bienvenido, puedes ingresar');
    } else {
        console.log('Hasta pronto!');
    }
}
// Alerta con input
const mayorEdad = () => {
    const edadUsuario = prompt('Ingresa tu edad: ');
    if (edadUsuario >= 18) {
        console.log('Bienvenido!');
    } else {
        console.log('No puedes ingresar.');
    }
}