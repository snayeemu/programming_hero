let first;
console.log(first);

function second(a, b){
    const total = a + b;
}

const result = second();

console.log(result);

function third(a, b, c, d){
    console.log(a, b, c, d);
}
third(2, 5);

function noNegative(a, b){
    if(a < 0 || b < 0)
        return;
    return a + b;
}

const total = noNegative(2, -5);
console.log(total);

const fifth = { id: 2, name: 'ponchom', age: 40 }
console.log(fifth.age, fifth.salary);

const sixth = [ 4, 89, 87, 56, 54 ];
delete sixth[1];
console.log(sixth[1], sixth[5], sixth[200]);
const eighth = undefined;