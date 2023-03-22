const prompt = require('prompt-sync')();

function factorial (number ) {
    let factorial = 1;
    for (let i = number; i >= 1; i--) {
        factorial *= i;
    }
    return factorial;
}

let number = prompt('Enter a number: ');
let factorialOfTheNumber = factorial(number);
console.log('Factorial of ', number, 'is ', factorialOfTheNumber);
