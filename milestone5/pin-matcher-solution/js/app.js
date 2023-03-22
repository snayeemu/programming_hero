let pin;

document.querySelector('.generate-btn').addEventListener('click', function(){
    pin = Math.round(Math.random() * 8999 + 1000);
    document.querySelector('#display-pin').value = pin;
    
});

document.querySelector('#calculator').addEventListener('click', function(event) {
    let number = event.target.innerText;
    if (number.length > 1)
        return;
    let inputField = document.querySelector('#input-pin');
    if (number == '<'){
        inputField.value = inputField.value.slice(0, (inputField.value.length - 1));

    }
    else if (number == 'C'){
        inputField.value = '';

    }
    else{
        inputField.value += number;

    }

});

document.querySelector('.submit-btn').addEventListener('click', function(event){
    let inputField = document.querySelector('#input-pin');
    let actionField = document.querySelector('.action-left');
    if (parseInt(inputField.value) == pin){
        actionField.innerText = "Pray to Allah and Work Hard!!!";
        actionField.style.color = 'green';
        document.querySelector('.notify-2').style.display = 'block';
        document.querySelector('.notify-1').style.display = 'none';
    }
    else {
        let actionCounter = document.querySelector('#action-count');
        let count = parseInt(actionCounter.innerText) - 1;
        actionCounter.innerText = count;
        document.querySelector('.notify-1').style.display = 'block';
        if (parseInt(actionCounter.innerText) == 0) {
            event.target.disabled = true;
            actionField.innerText = 'Don\'t Cry!!!';
        }
    }
})