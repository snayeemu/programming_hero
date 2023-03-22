const showAlert = () => {
    alert('Don\'t ask for money');
}

const takeMoney = () => {
    const result = confirm('Is there 500tk available?');
    if (result) alert('Well');
    else alert(':(');
}

const getInfo = () => {
    const name = prompt('Tell me your name: ');
    if(name === 'Shaikh Nayeem Uddin') alert('real');
    else alert('fake');
}