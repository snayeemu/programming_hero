const shoppingCart = [
    { name: 'shoe', price: 1200},
    { name: 'shirt', price: 2200},
    { name: 'pant', price: 3700},
    { name: 'belt', price: 600}
];

function totalCost(shoppingCart) {
    let totalCost = 0;
    for (let cart of shoppingCart) 
        totalCost += cart['price'];
    return totalCost;
}

console.log(totalCost(shoppingCart));