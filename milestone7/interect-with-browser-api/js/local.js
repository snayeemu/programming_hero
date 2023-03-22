const hello = localStorage.getItem('hello');
console.log(hello);

function setAge(){
    const age = prompt('Enter your age: ');
    localStorage.setItem('age', age);
    alert('done');
}