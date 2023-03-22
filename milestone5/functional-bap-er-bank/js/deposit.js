document.getElementById('btn-deposit').addEventListener('click', function(){
    const depositAmount = getInputNumber('deposit-amount');
    const previousDeposit = getInnerTextNumber('total-deposit');
    const totalDeposit = add(depositAmount, previousDeposit);
    setInnerText('total-deposit', totalDeposit);


    const previousBalance = getInnerTextNumber('total-balance');
    const newBalance = add(depositAmount, previousBalance);
    console.log(newBalance);
    setInnerText('total-balance', newBalance);
});