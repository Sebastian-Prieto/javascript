const human =  {
    name: 'Sebastián',
    lastname: 'Prieto',
    age: 20,
    email: 'sbprietoc@gmail.com',
    subscriptions: {
        youtube: true,
        spotify: true,
    },
    favoriteColors: ['Black', 'Purple'],
}

console.log(human.subscriptions);
console.log(human['age']);

const age = 'age';
console.log(human['age']);

// ----------------------------------------------------------------
// Métodos propios o personalizados
const user = {
    name: 'Sebastián',
    age: 20,
    friends: ['Max', 'Alex', 'John'],
    greeting: () => {
        console.log('Hey!');
    },
}
console.log(user.greeting());

// Object.keys() -> Nos devuelve un arreglo con las llaves (keys) del objeto.SÓLO devuelve las llaves
const resultUser = Object.keys(user);
console.log(resultUser);
// Object.values() -> Nos devuelve un arreglo con los valores del objeto.
const resultUser2 = Object.values(user);
console.log(resultUser2);
// Object.entries() -> Nos devuelve un arreglo con clave y valor en parejas
const resultUser3 = Object.entries(user);
console.log(resultUser3);
console.log(`El objeto tiene ${resultUser3.length} propiedades`);