const prompt = require ('prompt-sync')();

function add (num1, num2) {
    if (typeof num1 != 'number' || typeof num2 != 'number')
        return 'Please enter a number';
    return num1 + num2;
}

// const numbers = prompt('Enter two number to add: ').trim().split(' ').slice(0, 2).map(Number);

console.log(add (1,  'a'));