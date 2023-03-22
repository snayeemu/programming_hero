const prompt = require('prompt-sync')();

let number = parseInt(prompt("Enter a number: "));
let remainder = number % 5;
console.log(remainder);