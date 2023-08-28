/*
    Estructura de una clase
    - Definición
    - Propiedades: La clase puede contener variables que dentro de una clases se llaman propiedades
    - Constructor: Es un método especial para inicializar un objeto creado a partir de la clase
    - Métodos: La clase puede contener funciones. Dentro de una clase se llaman métodos
*/
class User {
    type = 'user';
    constructor(name, lastname){
        this.name = name;
        this.lastname = lastname;
        console.log('New user: ' + name);
    }
    getFullname(){
        console.log('Getting data...');
        return `Your fullname is: ${this.name} ${this.lastname}`;
    }
}
const user = new User('Sebastián', 'Prieto');
console.log(user.getFullname());