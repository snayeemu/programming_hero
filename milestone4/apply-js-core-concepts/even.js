const prompt = require('prompt-sync')();

function isEven (number) {
    return (number % 2 == 0 ? true : false);
}

let number = parseFloat(prompt('Enter a number: '));
isEven = isEven(number);
console.log(isEven);