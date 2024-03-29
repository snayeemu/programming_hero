const numbers = [12, 56, 87, 44]; 
const half = numbers.map(num => num / 2);
const thirds = numbers.map(num => num / 3);
// console.log(half);
// console.log(thirds);

const friends = ['Tom Hanks', 'Tom Cruise', 'Tom Brady', 'TOM Solaiman'];
const firstLetters = friends.map(friend => friend[0]);
console.log(firstLetters);
const nameLengths = friends.map(friend => friend.length);
console.log(nameLengths);

const products = [
    {id: 1, name: 'laptop', price: 45000},
    {id: 1, name: 'mobile', price: 80000},
    {id: 1, name: 'watch', price: 35000},
    {id: 1, name: 'tablet', price: 23000},
];

const items = products.map(product => product.name);
console.log(items);

const prices = products.map(product => product.price);
console.log(prices);
