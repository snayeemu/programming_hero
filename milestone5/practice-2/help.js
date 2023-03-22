function validation(valueOne, valueTwo){
    if(isNaN(valueOne) || isNaN(valueTwo) || valueOne < 0 || valueTwo < 0) {
        alert('Your input is incorrect. Please, provide a valid number');
        return;
    }
    else
        return 0;
}

const isValid = validation(card.shapeFirstValue, card.shapeSecondValue);
if (isNaN(isValid))
    return;