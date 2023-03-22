// console.log(Math.max(12, 85, 999, 78));
const numbers = [12, 85, 999, 78];
console.log(Math.max(...numbers));

const numbers2 = [...numbers];
const numbers3 = [444, 78, ...numbers, 111, 33];
numbers2.push('good');
console.log(numbers, numbers2);