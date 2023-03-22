const placesList = document.getElementById('places-list');
const li = document.createElement('li');
li.innerText = 'pahartoli bon';
placesList.appendChild(li);

// 1. where to ad
const mainContainer = document.getElementById('main-container');

// 2. what to add
const section = document.createElement('section');
const h1 = document.createElement('h1');
h1.innerText = 'My food list';
section.appendChild(h1);

const ul = document.createElement('ul');
let liList = [];
for (let i = 0; i < 3; i++)
    liList.push(document.createElement('li'));
liList[0].innerText = 'biryani';
liList[1].innerText = 'borhani';
liList[2].innerText = 'salad';
for (let element of liList)
    ul.appendChild(element);

section.appendChild(ul);

mainContainer.appendChild(section);


// set innerHTML directly
const sectionDress = document.createElement('section');
sectionDress.innerHTML = `
<h1>My Dress section</h1>
<ul> 
    <li>T-shirt</li>
    <li>Lungi</li>
    <li>Sando genji</li>
</ul>
`
mainContainer.appendChild(sectionDress);