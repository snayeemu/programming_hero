const prompt = require('prompt-sync')();

function fibo(number) {
    if (number <= 2)
        return 1;
    else if (number == 0)
        return 0;
    else {
        return (fibo(number - 1) + fibo(number - 2));
    }
}

let number = parseInt(prompt("Enter a number: "));

let fiboNumber = fibo(number);

console.log(fiboNumber);