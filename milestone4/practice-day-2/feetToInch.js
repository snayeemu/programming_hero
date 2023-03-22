const prompt = require ('prompt-sync')();

function feetToInch (feet) {
    return feet * 12;
}

let feet = parseFloat(prompt('Enter feet: '));

console.log(feet, ' feet in inch is ', feetToInch(feet));