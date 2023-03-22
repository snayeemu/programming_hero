// Problem 1: Let’s play a mind game
// this function is for mind game.
function mindGame(number) {
    if (typeof number != 'number' || number <= 0)
        return 'Enter a positive number!';
    return ((((number * 3) + 10) / 2 ) - 5);
}

// console.log(mindGame(50));

// Problem 2: Finding even or odd
// this function is to calculate, number of character in a string is even or odd
function evenOdd(string) {
    if (typeof string != 'string')
        return "Enter a string!";
    return (string.length % 2 == 0) ? 'Even' : 'Odd';;
}

// console.log(evenOdd('Batch7'));

// Problem 3: Is Less or Greater than seven
// This is a mathematical  function
// resubmitting this, amar vul chilo na, but assignment submit korar por question change kora hoiche...
function isLGSeven(number) {
    if (typeof number != 'number')
        return 'Enter a number!';
    return (number - 7 < 7) ? (number - 7) : 2 * number;
}

// console.log(isLGSeven(-15));

// Problem 4: Finding Bad data
// this function is for finding bad data.
function findingBadData(array) {
    if (!Array.isArray(array))
        return 'Enter an array!';
    numberOfBadData = 0;
    for (let number of array)
        if (number < 0)
            numberOfBadData++;
    return numberOfBadData;
}

// console.log(findingBadData([  -4, -9, -5, -33, -55 ]))

// Problem 5: Convert your gems into diamond
// this function is for calculating gems.
function gemsToDiamond(gems1, gems2, gems3) {
    if (typeof gems1 != 'number' || typeof gems2 != 'number' || typeof gems3 != 'number')
        return 'Enter three numbers!';
    return (gems1 * 21 + gems2 * 32 + gems3 * 43 > 2000) ? ((gems1 * 21 + gems2 * 32 + gems3 * 43) - 2000) : (gems1 * 21 + gems2 * 32 + gems3 * 43);
    
}

// console.log(gemsToDiamond(100, 5, 1));