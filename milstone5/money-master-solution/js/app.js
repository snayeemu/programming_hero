

document.getElementById('calculate-button').addEventListener('click', function(){
    setTotalExpense();
    setRemainingBalance();  
    setBalance();
});

document.getElementById('btn-save').addEventListener('click', function(){
    setTotalExpense();
    setBalance();
    setSavingAmount();
    setRemainingBalance();
})