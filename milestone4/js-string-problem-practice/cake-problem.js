const prompt = require('prompt-sync')();

function topperName (mark1, mark2, mark3) {
    return ((mark1 > mark2 && mark1 > mark3) ? 'Jim' : (mark2 > mark1 && mark2 > mark3) ? 'Dela' : (mark3 > mark2 && mark3 > mark1) ? 'Chinku' : 'None');
}

let marks = prompt('Enter marks: ').trim().split(' ').map(Number).slice(0, 3);
let topper = topperName(marks[0], marks[1], marks[2]);
console.log(topper);