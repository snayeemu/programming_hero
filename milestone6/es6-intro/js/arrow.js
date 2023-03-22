function add(first, second) {
    return first + second;
}

console.log(add(10, 20));

const add1 = function add1(first, second) {
    return first + second;
}

const add2 = function (first, second) {
    return first + second;
}

const add3 = (first, second) => first + second;

console.log(add3(11, 20));