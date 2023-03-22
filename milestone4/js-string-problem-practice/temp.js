let first = 5;
let second = 7;

let temp = second;
second = first;
first = temp;

console.log(first, second);

[ first, second ] = [ second, first];

console.log(first, second);
