function getInputNumber(id){
    let toReturn = parseFloat(document.getElementById(id).value);
    document.getElementById(id).value = '';
    if (isNaN(toReturn)){
        alert('Invalid input');
        return;
    }
    return toReturn;
}

function getInnerTextNumber(id){
    return parseFloat(document.getElementById(id).innerText);
}

function setInnerText(id, value) {
    document.getElementById(id).innerText = value;
}

function add(firstValue, secondValue) {
    return (firstValue + secondValue).toFixed(2);
}

function subtract(firstValue, secondValue) {
    return (firstValue - secondValue).toFixed(2);
}