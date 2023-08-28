// Nos va a permitir crear clases tomando las propiedades y métodos de otra
class User {
    constructor(name, password) {
        this.name = name;
        this.password = password;
    }
    getPost() {
        const posts = ['Post1', 'Post2', 'Post3'];
        return posts;
    }
}
class Moderator extends User{
    constructor(user, password, permissions) {
        super(user, password); // Herencia pura, hereda el constructor
        this.permissions = permissions;
    }
    deletePosts(id) {
        if(this.permissions.includes('borrar')) {
            console.log(`El post ${id} ha sido eliminado`);
        } else {
            console.log('No tienes los permisos para borrar post');
        }
    }
}
// const usuario = new User('Carlitos', 'Carlitos123');
// console.log(usuario.getPost());
const usuario2 = new Moderator('Felipiño', 'Felipiño123', ['borrar', 'editar']);
usuario2.deletePosts(8888);