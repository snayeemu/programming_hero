const color = 'yellow';
if (color === 'green') {
    console.log('You are a green friend');
}
else if (color === 'blue'){
    console.log('You are a blue friend');

}
else if (color === 'red') {
    console.log('You are a red friend');
}
else if (color === 'white') {
    console.log('You are white friend');
}
else if (color === 'yellow') {
    console.log('You are yellow friend');
}
else {
    console.log('You are a black friend');
}


switch (color){
    case 'green':
        console.log('You are a green friend');
        break;
    case 'blue':
        console.log('You are a blue friend');
        break;
    case 'white':
        console.log('You are a white friend');
        break;
    case 'red':
        console.log('You are a red friend');
        break;
    case 'yellow':
        console.log('You are a yellow friend');
        break;
    default:
        console.log('You are my black friend');
}