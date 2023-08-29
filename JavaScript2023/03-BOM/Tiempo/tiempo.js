// window.setTimeout() nos permite ejecutar funciones después de un tiempo
const greeting = () => {
    console.log('Hey');
}
let id;
const iniciar = () => {
    console.log('Iniciando timer...');
    id = setTimeout(greeting, 5000)
}
const detener = () => {
    console.log('Deteniendo timer...');
    clearTimeout(id)
}
// windos.setInterval() nos permite ejecutar una función cada cierto tiempo
let cuenta = 0;
let id2;
const iniciarCuenta = () => {
    id2 = setInterval(() => {
        console.log(cuenta);
        cuenta++;
    }, 1000);
}
const pararCuenta = () => {
    clearInterval(id2);
}
