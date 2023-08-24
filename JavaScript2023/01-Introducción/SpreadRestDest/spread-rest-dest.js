// Operador Spread
// Nos permite tomar los elementos de un objeto u arreglo y expandirlos a otro sitio
const frutas = ['Sandía',  'Manzana', 'Papaya', 'Mango', 'Lima'];
const favouriteFood = ['Sushi', 'Hamburguesa', ...frutas];
console.log(favouriteFood);

const login = {
    email: 'sbprietoc@gmail.com',
    password: '123abc'
};
const usuario = {
    nombre: 'Sebas',
    edad: 20,
    ...login,
};

console.log(usuario);

// Parámetro Rest
// Permite que una función contenga un número indefinido de argumentos.
// Los argumentos extra que encuentre los convertirá en un arreglo.
const registrarUsuario = (nombre, mail, ...datosAdicionales) => {
    console.log(nombre, mail, datosAdicionales);
}
registrarUsuario('Sebas', 'sbprietoc@gmail.com', 12, 12);

// Destructuración de elementos
// Nos permite obtener elementos o propiedades de un arreglo u objeto y guardarlos en una variable
const amigos = ['Pedro', 'Pablo', 'Juan'];
const hannah = {
    nombre: 'Hannah',
    tipo: 'Gato',
    años: 3,
}

const saludarMascota = ({nombre, tipo}) => {
    console.log(`Hola ${nombre}, eres un ${tipo}.`);
}
saludarMascota(hannah);

const { nombre, tipo, años } = hannah;
console.log(nombre);
const [primerAmigo, segundoAmigo, tercerAmigo] = amigos;
console.log(primerAmigo);
