const prompt = require('prompt-sync')();

function wordReverse(text) {
    text = text.split(' ');
    text.forEach((word, index, text) => {
        word = word.split('');
        word = word.reverse();
        text[index] = word.join('')
    });
    text = text.join(' ');
    return text;
}

let text = prompt('Enter: ');
reversedWord = wordReverse(text);
console.log(reversedWord);
