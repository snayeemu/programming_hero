const shoppingCart = [
    { name: 'shoe', price: 1200, quantity: 2},
    { name: 'shirt', price: 2200, quantity: 5},
    { name: 'pant', price: 3700, quantity: 4},
    { name: 'belt', price: 600, quantity: 3},
];

function totalCost(shoppingCart) {
    let totalCost = 0;
    for (let cart of shoppingCart) 
        totalCost += cart['price'] * cart['quantity'];
    return totalCost;
}

console.log(totalCost(shoppingCart));