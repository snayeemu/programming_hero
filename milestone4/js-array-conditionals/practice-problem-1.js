let fruits = [ 'Apple', 'Banana', 'Orange' ];
let indexOfBanana = fruits.indexOf('Banana');
console.log("Index of banana is", indexOfBanana);
fruits[1] = 'Mango';
console.log('Mango added', fruits);
fruits.pop();
console.log('Orange removed', fruits);
fruits.push('Watermelon');
console.log('Watermelon added', fruits);
