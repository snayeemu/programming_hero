document.getElementById('btn-withdraw').addEventListener('click', function(){
    const withdrawAmount = getInputNumber('withdraw-amount');
    const previousWithdraw = getInnerTextNumber('total-withdraw');
    const totalDeposit = add(withdrawAmount, previousWithdraw);
    setInnerText('total-withdraw', totalDeposit);


    const previousBalance = getInnerTextNumber('total-balance');
    const newBalance = subtract(previousBalance, withdrawAmount);
    
    if (newBalance < 0){
        alert('Insufficient balance!!!');
        return;
    }

    setInnerText('total-balance', newBalance);
});