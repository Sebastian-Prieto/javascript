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
    greeting: function(){
        alert('Hey!');
    },
}

console.log(human.subscriptions);
console.log(human['age']);

const age = 'age';
console.log(human['age']);

console.log(human.greeting());
