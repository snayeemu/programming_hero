

document.getElementById('btn-increment').addEventListener('click', function(){
    const incrementField = document.getElementById('increment');
    let number = parseInt(incrementField.innerText);
    number++;
    localStorage.setItem('count', number);
    incrementField.innerText = number;
});

function loadLocalStorage(){
    if(localStorage.getItem('count'))
        document.getElementById('increment').innerText = localStorage.getItem('count');
}

loadLocalStorage();