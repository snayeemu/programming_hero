class TeamMember{
    name;
    location;
    constructor(name, location){
        this.name = name;
        this.location = location;
    }
    provideFeedback(){
        console.log(`${this.name} thank you for your feedback`);
    }
}

class Instructor extends TeamMember{
    designation = 'Web Course Innstructor';
    team = 'web team';
    constructor(name, location){
        super(name, location);
    }
    startSupportSession(time) {
        console.log(`start the support session at ${time}`);
    }
    createQuiz(module){
        console.log(`please create quize for module ${module}`);
    }
    

}

class Developer extends TeamMember{
    designation = 'Web Course Innstructor';
    team = 'web team';
    tech;
    constructor(name, location, tech){
        super(name, location);
        this.tech = tech;
    }
    developFeature(feature) {
        console.log(`Please develop the ${feature}`);
    }
    release(version){
        console.log(`please release the version ${version}`);
    }
    provideFeedback(){
        console.log(`${this.name} thank you for your feedback`);
    }

}

class JobPlacement extends TeamMember{
    designation = 'Job Placement Commandos';
    team = 'Job Placement';
    constructor(name, location){
        super(name, location);
    }
    provideResume(feature) {
        console.log(`Please develop the ${feature}`);
    }
    prepareStudent(version){
        console.log(`please release the version ${version}`);
    }

}

const aamir = new Instructor('aamir', 'katabon');
console.log(aamir);
aamir.startSupportSession('9:00');
aamir.createQuiz('60');

const Solaiman = new Developer('Solaiman Khan', 'Dhaka', 'Website');

console.log(Solaiman);