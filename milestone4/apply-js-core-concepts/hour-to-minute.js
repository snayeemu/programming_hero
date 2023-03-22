const prompt = require('prompt-sync')();

function hourToMinute (hour) {
    return hour * 60;
}

let hour = parseInt(prompt('Enter number of hours: '));
minutes = hourToMinute(hour);
console.log(hour, 'hour in minutes is, ', minutes);