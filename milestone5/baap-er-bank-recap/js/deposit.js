
document.getElementById('btn-deposit').addEventListener('click', function(){
    let depositAmount = parseFloat(document.getElementById('deposit-amount').value);
    document.getElementById('deposit-amount').value = '';

    if (isNaN(depositAmount)){
        alert('Enter valid amount');
        return;
    }

    let previousAmount = parseFloat(document.getElementById('total-deposit').innerText);

    let currentAmount = (depositAmount + previousAmount).toFixed(2);

    let depositTotalField = document.getElementById('total-deposit');

    depositTotalField.innerText = currentAmount;

    let previousBalance = parseFloat(document.getElementById('total-balance').innerText);

    let currentBalance = (depositAmount + previousBalance).toFixed(2);

    document.getElementById('total-balance').innerText = currentBalance;


})