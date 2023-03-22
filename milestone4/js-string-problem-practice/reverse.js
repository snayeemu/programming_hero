const prompt = require('prompt-sync')();

function reverseString(text) {
    text = text.split('');
    text = text.reverse();
    text = text.join('');
    return text;
}

let text = prompt("Enter: ");
let reversed = reverseString(text);
console.log(reversed);


