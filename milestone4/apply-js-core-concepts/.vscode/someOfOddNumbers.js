const prompt = require ('prompt-sync')();


function sumOfOddNumbers (array) {
    sumOfOdd = 0;
    for (let i in array)
        sumOfOdd += (array[i] % 2 == 1 ? array[i] : 0);
    return sumOfOdd;
}

let array = prompt('Enter numbers: ').slice().split(' ').map(Number);

sumOfOddNumbers = sumOfOddNumbers(array);

console.log(sumOfOddNumbers);