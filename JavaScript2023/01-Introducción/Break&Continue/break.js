// Break nos permite cortar la ejecución de un ciclo
const names = ['Pedro', 'Juan', 'Pablo', 'Peter', 'Patricio'];
for(let i = 0; i < names.length; i++){
    if (names[i][0] != 'P') {
        console.log('¡ALTO! hay un nombre que no empieza por la letra "P", el ciclo se detendrá.');
        break;
    }
    console.log(names[i]);
}
// La sentencia Continue nos sirve para saltar a la siguiente iteración
const invitados = ['Dan Abramov', 'Midudev', 'RazoRShark97', 'Guillermo Rodas', 'AforDigital'];
console.log('Lista de invitados aceptados: ');
for (let i = 0; i < invitados.length; i++) {
    if (invitados[i] === 'RazoRShark97') {
        continue;
    }
    console.log(invitados[i]);
}