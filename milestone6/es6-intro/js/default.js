// function add(first, second) {
//     second = second || 0;
//     return first + second;
// }

function add(first, second = 0) {
    return first + second;
}

console.log(add(10, 20));

function fullName (first, last = 'Uddin'){
    return first + ' ' + last;
}

console.log(fullName('Shaikh Nayeem'));