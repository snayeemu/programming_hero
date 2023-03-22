class Instructor{
    name;
    designation = 'Web Course Innstructor';
    team = 'web team';
    location;
    constructor(name, location){
        this.name = name;
        this.location = location;
    }
    startSupportSession(time) {
        console.log(`start the support session at ${time}`);
    }
    createQuiz(module){
        console.log(`please create quize for module ${module}`);
    }

}

const aamir = new Instructor('aamir', 'katabon');
console.log(aamir);
aamir.startSupportSession('9:00');
aamir.createQuiz('60');

const Solaiman = new Instructor('Solaiman Khan', 'Dhaka');

console.log(Solaiman);