// Fetch es obtener o realizar petición
const fetchPosts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const posts = ['Post1', 'Post2', 'Post3', 'Post4'];
            const error = true;
            if (error) {
                reject('Hubo algún error al traer los posts!');
            } else {
                resolve(posts)
            }
        }), 2000
    });
}
fetchPosts().then((posts)=> { console.log(posts); });
fetchPosts().catch((error) => { console.log(error); })