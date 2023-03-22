const prompt = require('prompt-sync')();

function tallest(tallest) {
    return Math.max(...tallest);
}

let heights = prompt('Enter heights: ').trim().split(' ').map(Number);
let tallestValue = tallest(heights);

console.log(tallestValue);