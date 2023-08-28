// ForEach es un método de los arreglos que podemos usar para recorrer elementos
const friends = ['Pedro', 'Pablo', 'Juan'];
friends.forEach((friend, index) => {
    console.log(`El amigo # ${index} es ${friend} `);
});
// ForIn nos permite recorrer las propiedades de un objeto
const persona = {
    nombre: 'Paco',
    apellido: 'Tillas',
    edad: 12, 
}
for(propiedad in persona) { 
    persona[propiedad] = '';
}
console.log(propiedad);
// ForOf nos permite recorrer los valores de un objeto iterable: Arreglos, Cadenas de texto
// Mapas, Listas de nodos, etc...
const etiquetas = document.head.children;
console.log(etiquetas);
for (elemento of etiquetas) {
    console.log(elemento);
}