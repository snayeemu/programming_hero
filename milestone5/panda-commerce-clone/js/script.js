let allH2 = document.querySelectorAll('h2');
for (let h2 of allH2)
    h2.style.color = 'lightblue';

document.getElementById('backpack').style.backgroundColor = 'tomato';

let cards = document.getElementsByClassName('card');
for (let card of cards)
    card.style.borderRadius = '30px';

document.querySelector('.consol-log').addEventListener('click', function () {
    console.log('How are you?');
});

let allButtons = document.getElementsByClassName('btn');
for (let btn of allButtons)
    btn.addEventListener('click', function (event) {
        if (btn.innerText == 'Buy Now')
            event.target.parentNode.parentNode.parentNode.removeChild(event.target.parentNode.parentNode);
    });

document.querySelector('.form-control').addEventListener('keyup', function (event) {
    if (event.target.value == 'email')
        document.getElementById('submit-button').removeAttribute('disabled');
    else
        document.getElementById('submit-button').setAttribute('disabled', '');
});

document.getElementById('change-image').addEventListener('mouseenter', function (event) {
    // event.target.innerHTML = ''
    event.target.parentNode.innerHTML = `
    <img id="change-image" src="images/shoes/shoe-1.png" class="card-img-top" alt="...">
    `;
});

document.getElementById('change-image').addEventListener('mouseleave', function (event) {
    // event.target.innerHTML = ''
    event.target.parentNode.innerHTML = `
    <img id="change-image" src="images/bags/bag-1.png" class="card-img-top" alt="...">
    `;
    console.log('working');
});

document.getElementById('stay-in-touch').addEventListener('dblclick', function (event) {
    if (event.target == document.querySelector('.form-control').parentNode.parentNode.parentNode) {
        document.getElementById('stay-in-touch').classList.remove('bg-danger');
        document.getElementById('stay-in-touch').classList.add('bg-success');
    }

});