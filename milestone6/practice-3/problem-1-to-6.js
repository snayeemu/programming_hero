const student = {
    name: 'Nayeem',
    age: 22,
    works: {morning: 'drinks coffee', evening: 'sleeping'},
    habits: ['working', 'reading', 'drinking coffee', 'sleeping', 'coding', 'workout'],
    getName: function(){ return this.name}
}

for(let i in student)
    console.log(student[i]);

const studentInfo = `Name is ${student.name}, ${student.habits[0]} is his habit.
In the morning he ${student.works.morning}.`;
console.log(studentInfo);

const return89 = () => 89;
console.log(return89());
const divideBy17 = number => number / 17;
console.log(divideBy17(18));

const addHalf = (num1, num2) => (num1 + num2) / 2;
console.log(addHalf(1, 2));

const maths = (num1, num2) =>{
    num1 += 7;
    num2 += 7;
    return num1 + num2;
}
console.log(maths(2, 3));

const array = [1, 2, 3, 4];
const arrayDivideBy7 = array.map(number => number / 7);
console.log(arrayDivideBy7);

const {name} = student;
console.log(name);
const [_, balance] = array;
console.log(balance);