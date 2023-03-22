const prompt = require('prompt-sync')();

let lengthOfSides = [];

for (let i = 0; i < 3; i++){
    console.log('Enter length of sides', i + 1, " : ");
    lengthOfSides[i] = parseInt(prompt());
}

if (lengthOfSides[0] == lengthOfSides[1] || lengthOfSides[0] == lengthOfSides[2] || lengthOfSides[1] == lengthOfSides[2])
    console.log('Isosceles');
else
    console.log('Not Isosceles');