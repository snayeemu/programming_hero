function add (number1, number2) {
    console.log (number1, number2);
    let sum = number1 + number2;
    return sum;
}

let total = add (80, 20);
console.log('total', total);

function bringSingara(money) {
    let singaraPrice = 10;
    let quantity = money / singaraPrice;
    return parseInt(quantity);
}

let myTaka = 150;
let singaras = bringSingara(myTaka);
console.log('Eating singaras:', singaras);