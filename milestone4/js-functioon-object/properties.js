let shoppingCart = {
    books: 3,
    sunglass: 1,
    keyboard: 5,
    mouse: 1, 
    pen: 25

}

let penCount =  shoppingCart.pen;
let penCount2 = shoppingCart['pen'];

let properties = Object.keys(shoppingCart);
// let propertyValues = Object.values(shoppingCart);
// console.log(properties);
// console.log(propertyValues);

let propertyName = 'books';
let propertyValue = shoppingCart [propertyName];
console.log (propertyName, propertyValue);  
// console.log(shoppingCart);

console.log(shoppingCart);
shoppingCart.mouse = 15;
console.log(shoppingCart)