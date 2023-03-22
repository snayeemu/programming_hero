function toggleClassInTextArea(className) {
    const textAreaField = document.querySelector('#text');
    textAreaField.classList.toggle(className);
    console.log(textAreaField);
}

function getFieldByClassName(className) {
    return document.querySelector(className);
}

getFieldByClassName('.fa-solid.fa-bold').addEventListener('click', function(){
    toggleClassInTextArea('fw-bold');
});

getFieldByClassName('.fa-solid.fa-italic').addEventListener('click', function() {
    toggleClassInTextArea('fst-italic');
})

getFieldByClassName('.fa-solid.fa-underline').addEventListener('click')