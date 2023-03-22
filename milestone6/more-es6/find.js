const numbers = [12, 5, 23, 45, 11, 18, 9, 55, 61, 1];

const firstNumberDevisibleByFive = numbers.find(num => num % 5 === 0);
const fivesAll = numbers.filter(num => num % 5 === 0);
console.log(firstNumberDevisibleByFive);
console.log(fivesAll);

const products = [
    {id: 1, name: 'laptop', price: 65000},
    {id: 1, name: 'mobile', price: 80000},
    {id: 1, name: 'watch', price: 30000},
    {id: 1, name: 'tablet', price: 23000},
];

const aProductBelow40K = products.find(product => product.price < 40000);
console.log(aProductBelow40K);