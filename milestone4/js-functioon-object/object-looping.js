let shoppingItems = ['books', 'sunglass', 'shoes', 'pen'];
let friendsAge = [12, 45, 78, 12, 32, 14];
friendsAge = {
    rahim: 12,
    samad: 45,
    karim: 78,
    jamal: 12,
    robi: 32,
    kazi: 14
}


let shoppingCart = {
    books: 3,
    sunglass: 1,
    keyboard: 5,
    mouse: 1, 
    pen: 25,
    shoes: 2,
}

const keys = Object.keys(shoppingCart);

console.log(keys);

const values = Object.values(shoppingCart);
console.log (values);

// keys = [
//     'books',    'sunglass',
//     'keyboard', 'mouse',
//     'pen',      'shoes',
//     'bottle'
//   ]
for (let i = 0; i < keys.length; i++) {
    let propertyName = keys[i];
    let propertyValue = shoppingCart[propertyName];
    console.log(propertyName, propertyValue);
}

for (let propertyName in shoppingCart){
    console.log(propertyName, shoppingCart[propertyName]);
}