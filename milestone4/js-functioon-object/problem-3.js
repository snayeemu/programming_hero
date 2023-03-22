function averageOfArray (arr) {
    let sum = 0;
    for (let i in arr) 
        sum += arr[i];
    return sum / arr.length
}

console.log( averageOfArray([1, 2 , 3]));