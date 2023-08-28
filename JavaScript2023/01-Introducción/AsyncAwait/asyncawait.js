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
        }), 4000
    });
}
const showPosts = async() => {
    try {
        const posts = await fetchPosts();
        console.log(posts); 
    } catch (e) {
        console.log(e);
    }
}
showPosts();