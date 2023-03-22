const prompt = require ('prompt-sync')();


function paperRequirements (firstBookQuantity, secondBookQuantity, thirdBookQuantity) {
    return firstBookQuantity * 100 + secondBookQuantity * 200 + thirdBookQuantity * 300;
}

let booksQuantities = prompt('Enter books quantities: ').trim().split(' ').slice(0, 3).map(Number);

console.log('Paper needed: ', paperRequirements(...booksQuantities));

