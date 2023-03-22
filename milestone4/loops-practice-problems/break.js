/* for (let i = 1; i <= 20; i++) {
    console.log(i);
    if ( i > 10 ) 
        break;
} */

/* let roastGiven = 0;
while (roastGiven < 10) {
    console.log('Roast Den, gift item anchi');
    roastGiven++;
    if (roastGiven > 4)
        break;
} */

let items = ['bottle', 'mouse', 'sunglass', 'pen', 'notebook'];

for (let i = 0; i < items.length; i++){
    if (items[i] == 'pen')
        break;
    console.log(items[i]);
}