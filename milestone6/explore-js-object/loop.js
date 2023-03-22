const numbers = [ 12, 54, 65, 3, 54 ];
// for(const number of numbers)
//     console.log(number)

// 1. for of can not used with objects
const bottle = { color: 'yellow', price: 50, isCleaned: true, capacity: 1};
const keys = Object.keys(bottle);
console.log(keys);

for(const key of keys)
    console.log(key, bottle[key]);

// for in loop
for(const key in bottle)
    console.log(key, bottle[key]);

const pair = Object.entries(bottle);
console.log(pair);
for(const [key, value] of pair)
    console.log(key, value);