const prompt = require ('prompt-sync')();

function positiveBeforeNegative (array) {
    let toReturn = [];
    for (let number of array)
        if (number >= 0)
            toReturn.push(number);
        else
            break;
    return toReturn;
}

let numbers = prompt('Enter numbers: ').trim().split(' ').map(Number);
console.log('Positive before negative is: ', positiveBeforeNegative(numbers));
