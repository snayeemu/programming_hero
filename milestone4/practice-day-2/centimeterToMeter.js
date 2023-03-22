const prompt = require ('prompt-sync')();

function centimeterToMeter (centimeter) {
    return centimeter / 100;
}

let centimeter = parseFloat(prompt('Enter centimeter: '));

console.log(centimeter, ' centimeter in meter is ', centimeterToMeter(centimeter));