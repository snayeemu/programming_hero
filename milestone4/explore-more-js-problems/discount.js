const prompt = require('prompt-sync')();

function totalCost(ticketNumber) {
    let cost;
    if (ticketNumber - 100 > 0) {
        cost = 100 * 100;
        ticketNumber -= 100;
    }
    else
        return ticketNumber * 100;
    if (ticketNumber - 100 > 0) {
        cost += 100 * 90;
        ticketNumber -= 100;
    }
    else
        return (cost += ticketNumber * 90);
    return (cost += ticketNumber * 70);
}

let numberOfTickets = parseInt(prompt('Enter number of tickets: '));
console.log('cost is', totalCost(numberOfTickets));