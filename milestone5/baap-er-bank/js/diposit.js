document.getElementById('deposit-btn').addEventListener('click', function(){
    let depositAmount = document.getElementById('deposit-field').value;
    depositAmount = parseFloat(depositAmount);
    document.getElementById('deposit-field').value = '';
    let depositTotal = document.getElementById('deposit-total').innerText;
    depositTotal = parseFloat(depositTotal);
    document.getElementById('deposit-total').innerText = depositTotal + depositAmount;

    let currentAmount = parseFloat(document.getElementById('current-balance').innerText);
    document.getElementById('current-balance').innerText = currentAmount + depositAmount;
});

