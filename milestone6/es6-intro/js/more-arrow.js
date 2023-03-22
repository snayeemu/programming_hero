const add = (first, second) => first + second;
const getFullName = (firstName, lastName) => `${firstName} ${lastName}`;
const multiply = (a, b) => a * b;

console.log(multiply(7, 8));

const doubleIt = (number) => number * 2;

// one parameter simplified version:
const fiveTimes = num => num * 5;

// multiline arrow function:
const doMath = (x, y, z) => {
    const firstSum = x + y;
    const secondSum = y + z;
    return firstSum * secondSum;    
}