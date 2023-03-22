const plusButtonFields = document.getElementsByClassName('fas fa-plus');
const inputFields = document.getElementsByClassName('input-field');
const priceFields = document.getElementsByClassName('price-to-update');
const total = document.getElementsByClassName('total');

let pricePerProducts = [];

for (let i = 0; i < priceFields.length; i++) {
    let toPush = parseInt(priceFields[i].innerText)
    pricePerProducts.push(toPush);
}

function updateValueAndPrice(plusOrMinus, i) {
    let subTotal;
    let toReturn = true;
    if (plusOrMinus == 'plus') {
        const updateValue = parseInt(inputFields[i].value) + 1;
        inputFields[i].value = updateValue;
        const updatePrice = parseInt(priceFields[i].innerText) + pricePerProducts[i];
        priceFields[i].innerText = updatePrice;
        for (let value of total){
            if (toReturn){
                subTotal = parseInt(value.innerText) + pricePerProducts[i];
                toReturn = false;

            }
            value.innerText = parseInt(value.innerText) + pricePerProducts[i];
        }
    }
    else {
        const updateValue = parseInt(inputFields[i].value) - 1;

        if (updateValue < 0)
            return;

        inputFields[i].value = updateValue;
        const updatePrice = parseInt(priceFields[i].innerText) - pricePerProducts[i];
        priceFields[i].innerText = updatePrice;
        for (let value of total){
            if (toReturn) {
                subTotal = parseInt(value.innerText) - pricePerProducts[i];
                toReturn = false;

            }
            value.innerText = parseInt(value.innerText) - pricePerProducts[i];
        }
    }
    return subTotal;
}

function addTax(subTotal) {
    total[1].innerText = (subTotal + (subTotal * 0.1)).toFixed(2);
    document.getElementById('tax').innerText = (subTotal * 0.1).toFixed(2);
}

console.log(pricePerProducts);

for (let i = 0; i < plusButtonFields.length; i++) {
    plusButtonFields[i].addEventListener('click', function () {
        let subTotal = updateValueAndPrice('plus', i);
        addTax(subTotal);
    });
}

const minusButtonFields = document.getElementsByClassName('fas fa-minus');

for (let i = 0; i < minusButtonFields.length; i++) {
    minusButtonFields[i].addEventListener('click', function () {
        let subTotal = updateValueAndPrice('', i);
        addTax(subTotal);
    });
}

const removeItem = document.getElementsByClassName('remove-item');

for (let i = 0; i < removeItem.length; i++) {
    removeItem[i].addEventListener('click', function (event) {
        event.target.parentNode.parentNode.parentNode.parentNode.removeChild(event.target.parentNode.parentNode.parentNode);
    })
}