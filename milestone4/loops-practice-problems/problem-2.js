const prompt = require('prompt-sync')();

let marks = [];
// marks = (prompt("Enter marks of five subjects: ").split(' ').slice(0, 5)).map(Number);
marks = [75.25, 65, 80, 35.45, 99.50];
console.log(marks);
let average = 0, total = 0;

for (let i in marks) {
    total += marks[i];
}

average = (total / 5).toFixed(2);
console.log('Average is:', average);