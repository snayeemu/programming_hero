const person = 'Adam Sand';
const person2 = "Ben White";
const person3 = `Ben White`;

const multiLine = 'First Line text \n' + 
'second line of code \n' + 
'Third line of text \n' +
'Fourth line of string';
// console.log(multiLine);

const newMultiLine = `First Line text
second line of code
Third line of text
Fourth line of string `;

// console.log(newMultiLine);

const a = 20;
const b = 30;
const nums = [78, 98, 45, 12, 6, 444];
const summary = 'sum of: ' + a + ' and ' + b + ' is: ' + (a + b);
// console.log(summary);

const newSummary = `sum of: ${a} and ${nums.length} is: ${a + nums.length}`;
console.log(newSummary);