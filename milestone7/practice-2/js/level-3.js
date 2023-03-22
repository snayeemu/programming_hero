
const sendButtons = Array.from(document.getElementsByClassName('btn-send'));
const deleteButtons = Array.from(document.getElementsByClassName('btn-delete'));

const inputs = document.getElementsByClassName('input');

const keys = ['name', 'email', 'message'];

let myDataObj;

function getObjValue(){
    if (!localStorage.getItem('myData'))
        myDataObj = {};
    else {
        myDataObj = localStorage.getItem('myData');
        myDataObj = JSON.parse(myDataObj);
    }
}

function setMyData(){
    myDataString = JSON.stringify(myDataObj);
    localStorage.setItem('myData', myDataString);
}

function setToLocalStorage(key, value) {
    getObjValue();
    myDataObj[key] = value;
    setMyData();
}

function deleteFromLocalStorage(key){
    getObjValue();
    myDataObj[key] = '';
    setMyData();
}

for (const i in sendButtons)
    sendButtons[i].addEventListener('click', function () {
        const toInput = inputs[i].value;
        setToLocalStorage(keys[i], toInput);
    });

for (const i in deleteButtons)
    deleteButtons[i].addEventListener('click', function(){
        deleteFromLocalStorage(keys[i]);
    });

function loadData(){
    getObjValue();
    for(const i in inputs)
        inputs[i].value = myDataObj[keys[i]];
}

loadData();