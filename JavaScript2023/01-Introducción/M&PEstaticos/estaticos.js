class User {
    constructor(nickname, email) {
        this.nickname = nickname;
        this.email = email;
    }
    static deleteUser(idUser) {
        console.log(`El usuario: ${idUser} ha sido eliminado`);
    }
}
// De esta forma siempre tendremos que hacer un objeto para poder eliminar otro
// const user1 = new User('Sykez', 'sykez@gmail.com');
// console.log(user1);
User.deleteUser(777); // De esta forma accedemos sin inicializar, a través de un método estático