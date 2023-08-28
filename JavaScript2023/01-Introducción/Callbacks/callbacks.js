// Los callbacks son funciones que podemos pasar como parámetro a otra función
const getPostByUser = (user, callback) => {
    console.log(`Obteniendo los posts de ${user}...`);
    setTimeout(() => {
        let posts = ['Post1', 'Post2', 'Post3'];
        callback(posts);
    }, 2000);
}
getPostByUser('Sykez', (posts) => {
    console.log(posts);
});