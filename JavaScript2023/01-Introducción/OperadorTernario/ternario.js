// VIP and Regular
// const user = 'Felipe';
// const ticket = 'VIP';
// const typeOfTicket = ticket === 'VIP' ? console.log(`${user} has a ticket type VIP`) || ticket === 'General' : console.log(`${user} has a ticket type General`);

// Solution
const user = 'Sebastián';
const ticket = 'VIP';
let idTicket;

const typeOfTicket = ticket === 'VIP' ? idTicket = `${user}, su ticket es: VIP-TICKET-121212` : idTicket = `${user}, su ticket es: REGULAR-TICKET-131313`;

console.log(typeOfTicket);