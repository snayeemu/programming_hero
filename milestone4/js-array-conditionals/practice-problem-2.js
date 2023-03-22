const prompt = require('prompt-sync')();
let grade = parseInt(prompt('Enter your grade: '));
if (grade >= 80)
    console.log('Your grade is A');
else if (grade >= 60)
     console.log('Your grade is B');
else if (grade >= 50)
    console.log('Your grade is C');
else if (grade >= 40)
    console.log('Your grade is D');
else
    console.log('Your grade is F');