const student = {
    name: 'Kodom Ali',
    money: 5000,
    study: 'Math',
    subjects: ['calculus', 'algebra', 'geometry'],
    exam: function(){
        return (this.name + ' is participating in an exam');
    },
    improveExam: function(subject){
        this.exam();
        return `${this.name} is taking improvement exam on ${subject}`;
    },
    treatDey: function(amount, tips){
        this.money -= (amount + tips);
        return this.money;
    }
}

const output = student.exam();
console.log(output);
const output2 = student.improveExam('math');
console.log(output2);
const remaining = student.treatDey(900, 100);
console.log(remaining);
console.log(student.treatDey(500, 50));