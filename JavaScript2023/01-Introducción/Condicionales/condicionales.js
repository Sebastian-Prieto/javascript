//  Estructura de un condicional

// Ejemplo 1 - Normal condition
const user = {
    name: 'Luis',
    age: 20,
    country: 'United States',
    ticket: true,
};
if (user.age >= 18 ) {
    console.log('El usuario es mayor de edad y puede entrar al concierto.');
} else {
    console.log('El usuario no es mayor de edad y puede entrar al concierto.');
}

// Ejemplo 2 - Using AND && Operator
const gamer = {
    name: 'Jaime',
    age: 20,
    country: 'Canada',
    ticket: true,
};
if (gamer.ticket === true && gamer.age >=18) {
    console.log('El usuario tiene un ticket para el concierto, es mayor de edad y puede ingresar.');
} else {
    console.log('El usuario no tiene un ticket para el concierto o es menor de edad y no puede ingresar.');
}

// Ejemplo 3 - Nested conditionals
const player = {
    name: 'Sebastián',
    age: 19,
    country: 'Norway',
    hasPC: true,
};

if (player.age >= 18) {
    if (player.hasPC === true) {
        console.log('El usuario es mayor de edad y tiene un computador.');
    } else {
        console.log('El usuario es mayor de edad pero no tiene computador.');
    }
} else {
    console.log('El usuario es menor de edad.');
}

// Ejemplo 4 - Else if 
const animal = {
    name: 'Hannah',
    age: 2,
    country: 'Argentina',
    isCat: true,
};

if (animal.country ===  'Colombia') {
    console.log('El animal es colombiano.');
} else if (animal.country === 'México') {
    console.log('El animal es Mexicano.');
} else {
    console.log('El animal es de otro país.');
}

 