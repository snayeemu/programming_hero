const prompt = require('prompt-sync')();

let takaGiven = parseFloat(prompt('Enter the value of given taka: '));
let totalCost = parseFloat(prompt('Enter the value of total cost: '));

let remainTaka = takaGiven - totalCost;
console.log('Remained taka: ', remainTaka);