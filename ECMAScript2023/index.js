// Rest parameters
function listFruits(fruit1, fruit2, fruit3) {
    console.log(fruit1)
    console.log(fruit2)
    console.log(fruit3)
}

listFruits ("Orange", "Apple", "Grape")

function listFruitsRestParameters(fruit1, ...fruits){
    console.log(fruit1);
    console.log(fruits);
}

listFruitsRestParameters("Manzana", "Pera", "Lulo", "Durazno")

// ForOf

function listFruitsRestParameters(fruit1, ...fruits){
    console.log(fruit1);
    console.log(fruits);

    for (let fruit of fruits) {
        console.log(fruit)
    }
}

listFruitsRestParameters("Manzana", "Pera", "Lulo", "Durazno")

// Ejercicio Gusano

const worm = ["👀", "🦶", "🦶", "🦶", "🦶"]
const [head, ...tail] = worm;

console.log(head)
console.log(tail)
// Destructuring

const sofi = { name: "Sofía", lastname: "Durán" }
// const name =  sofi.name;
// const lastname = sofi.lastname;

const { name, lastname } = sofi;
console.log(name);

// Template literals
const username = "Sebastián";
console.log(`Hello, ${username}`)

// Arrow functions 
const sayHi = (username) => {
    console.log(`Chiao, ${username}`)
}

sayHi(username)

// Object Map 
const numbers = new Map() 
numbers.set("one", 1)
numbers.set("two", 2)

console.log(numbers.get("one"))
console.log(numbers.get("two"))

// Object Set
const duplicatedNumbers = [1, 2, 2, 2, 3, 6]
const notDuplicatedNumbers = [...new Set(duplicatedNumbers)]
console.log(notDuplicatedNumbers)

