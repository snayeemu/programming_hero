document.getElementById('withdraw-btn').addEventListener('click', function(){
    let withdrawAmount = document.getElementById('withdraw-field').value;
    withdrawAmount = parseFloat(withdrawAmount);
    document.getElementById('withdraw-field').value = '';
    
    let currentAmount = parseFloat(document.getElementById('current-balance').innerText);
    if((currentAmount - withdrawAmount) < 0){
        alert('Insufficient balance.');
        return;

    }

    let withdrawTotal = document.getElementById('withdraw-total').innerText;
    withdrawTotal = parseFloat(withdrawTotal);
    document.getElementById('withdraw-total').innerText = withdrawTotal + withdrawAmount;

    
    document.getElementById('current-balance').innerText = currentAmount - withdrawAmount;
});