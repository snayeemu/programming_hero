console.log(1);
console.log(2);
let number = 0;
const intervalId = setInterval(()=>{
    console.log(number++);
    if(number === 10)
        clearInterval(intervalId);
}, 1000);
console.log(4);
console.log(5);
console.log(6);