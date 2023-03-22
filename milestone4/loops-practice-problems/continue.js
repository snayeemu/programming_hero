let numbers = [45, 87, 89, 56, 32, 51, 25, 188, 41, 25, 98];

for (let i = 0; i < numbers.length; i++){
    if (numbers[i] > 100 )
        continue;
    console.log(numbers[i]);
}