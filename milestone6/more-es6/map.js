const numbers = [2, 8, 4, 6, 3];
const output = [];


function getDoubles(numbers) {
    for (const number of numbers) {
        const doubled = doubleIt(number);
        output.push(doubled);
    }
    return output;
}


const doubleIt = number => number * 2;
const makeDouble = numbers.map(doubleIt);
const makeDoubleDirect = numbers.map(number => number * 2);
const makeDouble2 = numbers.map(x => x * 2);

const fiveTimes = [1, 2, 3, 4, 5].map(x => x * 5);
console.log(fiveTimes);

// const result = getDoubles(numbers);
console.log(makeDouble);
console.log(makeDoubleDirect);