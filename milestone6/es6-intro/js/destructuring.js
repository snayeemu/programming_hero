const fish = {
    name: 'King Hilsa',
    address: 'Chandpur',
    color: 'silver',
    phone: '017176588899',
    price: 4000
}

const {phone} = fish;

console.log(phone);

const {age, name} = {name: 'Almas', age: 56, profession: 'makeup artist'};
console.log(age);

const {address} = fish;
console.log(address);

// array
const [first, another] = [44, 99, 88, 456];
console.log(first, another);

const heroes = ['zakir', 'galib', 'nayeem'];
const [king, good, notun] = heroes;
console.log(notun);

function getNames() {
    return ['Alim', 'Halim'];
}

const [father, son] = getNames();
console.log(son);

let a = 10;
let b = 20;
[a, b] = [b, a];
console.log(a, b);