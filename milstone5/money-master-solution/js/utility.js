function getIncome () {
    const incomeField = document.getElementById('income-input');
    const income = parseInt(incomeField.value);
    if (isNaN(income)){
        alert('Enter valid positive number as income!!!')
        Exit();
    }
    else if(income < 0) {
        alert('Income cannot be negative!!!')
        Exit();
    }
    return income;
}

function getTotalExpense() {
    let totalExpense = 0;
    const expenseInput = document.getElementsByClassName('expense-input');
    for (let inputField of expenseInput){
        let value = parseInt(inputField.value);
        if (isNaN(value) || value < 0){
            alert('Enter valid positive number!!!');
            Exit();
        }
        totalExpense += value;
    }

    const income = getIncome();
    if(totalExpense > income){
        alert('Cut your shirt, according to your cloths!!!');
        Exit();
    }

    return totalExpense;
}

function setTotalExpense() {
    let totalExpense = getTotalExpense();
    const totalExpenseField = document.getElementById('total-expense');
    totalExpenseField.innerText = totalExpense;
}

function getSavingAmount() {
    const savingPercentage = parseInt(document.getElementById('input-save').value);

    if (savingPercentage > 100){
        alert('Can\'t be save more than 100%');
    }
    
    if (savingPercentage < 0) {
        alert('Saving amount can not be negative!!!');
        Exit();
    }
    else if (!isNaN(savingPercentage) ) {
        const income = getIncome();
        return ((income * savingPercentage) / 100).toFixed(2);
    }


    return 0;
}

function setSavingAmount(savingAmount = getSavingAmount()) {
    const balance = getBalance();
    if (savingAmount > balance) {
        alert('You can\'t save more than your balance!!!');
        Exit();
    }

    document.getElementById('saving-amount').innerText = savingAmount;
}

function getRemainingBalance () {
    let totalExpense = getTotalExpense();

    const savingAmount = getSavingAmount();

    const income = getIncome();

    return income - totalExpense - savingAmount;
}

function setRemainingBalance(remainingBalance = getRemainingBalance()) {
    const remainingBalanceField = document.getElementById('remaining-balance');
    console.log(remainingBalanceField);
    remainingBalanceField.innerText = remainingBalance;
}

function getBalance() {
    const expense = getTotalExpense();
    const income = getIncome();

    return income - expense;
}

function setBalance(balance = getBalance()) {
    const balanceField = document.getElementById('balance');
    balanceField.innerText = balance;
}