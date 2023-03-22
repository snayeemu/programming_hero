const prompt = require ('prompt-sync')();

function woodNeeded (numberOfChair, numberOfTable, numberOfBed) {
    return numberOfChair * 3 + numberOfTable * 10 + numberOfBed * 50;
}

let required = prompt('Enter number of chairs, number of tables, number of bed: ').trim().split(',').map(Number).slice(0, 3);

let woodAmount = woodNeeded(...required);

console.log('Wood needed', woodAmount, 'cft');