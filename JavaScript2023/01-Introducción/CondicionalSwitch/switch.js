const user = {
    name: 'Pedro',
    country: 'US',
};
switch(user.country){
    case 'UK': 
        console.log('El usuario es del Reino Unido.');
        break;
    case 'US': 
        console.log('El usuario es de Estados Unidos.');
        break;
    case 'Colombia':
        console.log('El usuario es de Colombia.');
        break;
    default:
        console.log('El usuario es de otro país.');
}