// Son estructuras que le dicen al navegador que espere hasta que finalicemos una operación
// Cuando finalicemos, le avisaremos y responderemos con datos
const promise = new Promise((resolve, reject) => {
    // Acción que se ejecutará
    setTimeout(() => {
        const success = false;
        if (success) {
            resolve('La operación tuvo éxito!');
        } else {
            reject('La operación no tuvo éxito!');
        }
    }, 4000)
});
promise.then((mensaje) => {
    console.log(mensaje);
})
promise.catch((mensaje) => {
    console.log(mensaje);
})