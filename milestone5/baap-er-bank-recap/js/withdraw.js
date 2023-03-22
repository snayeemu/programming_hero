
document.getElementById('btn-withdraw').addEventListener('click', function(){
    let withdrawAmount = parseFloat(document.getElementById('withdraw-amount').value);
    document.getElementById('withdraw-amount').value = '';

    if (isNaN(withdrawAmount)){
        alert('Enter valid amount');
        return;
    }

    let previousAmount = parseFloat(document.getElementById('total-withdraw').innerText);

    let currentAmount = (withdrawAmount + previousAmount).toFixed(2);

    let previousBalance = parseFloat(document.getElementById('total-balance').innerText);
    

    if (withdrawAmount > previousBalance){
        alert('Insufficient balance!');
        return;
    }

    let depositTotalField = document.getElementById('total-withdraw');

    depositTotalField.innerText = currentAmount;

    let currentBalance = (previousBalance - withdrawAmount).toFixed(2);

    


    

    document.getElementById('total-balance').innerText = currentBalance;


});