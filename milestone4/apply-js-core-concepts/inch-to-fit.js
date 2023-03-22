const prompt = require('prompt-sync')();

function inchToFeet(inch) {
    return inch / 12;
}

let heightInInch = parseFloat(prompt('Enter your height in inch: '));
let heightInFeet = inchToFeet(heightInInch);
console.log('Height in feet is, ', heightInFeet);