// CODE here for your Lambda Classes


//PERSON

class Person {
    constructor(attributes){
        this.name = attributes.name,
        this.age = attributes.age,
        this.location = attributes.location
    }
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}.`;
    }
}

class PersonOne {
    constructor(attributes){
        this.name = attributes.name,
        this.age = attributes.age,
        this.location = attributes.location
    }
    talk() {
        return `Hello my name is ${this.name}, I am from ${this.location}.`;
    }
}

//INSTRUCTOR

class Instructor extends Person {
    constructor(moreAttributes){
        super(moreAttributes);
        this.specialty = moreAttributes.specialty,
        this.favLanguage = moreAttributes.favLanguage,
        this.catchPhrase = moreAttributes.catchPhrase
    }
    demo(subject) {
        return `Today we are learning about ${subject}`
    }
    grade(name, subject) {
        return `${name} recieves a perfect score on ${subject}.`;
    }
}

class InstructorOne extends Person {
    constructor(moreAttributes){
        super(moreAttributes);
        this.specialty = moreAttributes.specialty,
        this.favLanguage = moreAttributes.favLanguage,
        this.catchPhrase = moreAttributes.catchPhrase
    }
    demo(subject) {
        return `Today we are learning about ${subject}`
    }
    grade(name, subject) {
        return `${name} recieves a perfect score on ${subject}.`;
    }
}



//STUDENT

class Student extends Person {
    constructor(studentAttributes){
        super(studentAttributes);
        this.perviousBackground = studentAttributes.perviousBackground,
        this.className = studentAttributes.className,
        this.favSubjects = studentAttributes.favSubjects
    }
    listSubjects() {
        return `My favorite subjects are ${this.favSubjects}.`;
    }
    PRAssignment(name, subject) {
        return `${name} has submitted a PR for ${subject}.`;
    }
    sprintChallenge() {
        return `${student.name} has begun sprint challenge on ${subject}.`
    }
}

class StudentOne extends Person {
    constructor(studentAttributes){
        super(studentAttributes);
        this.perviousBackground = studentAttributes.perviousBackground,
        this.className = studentAttributes.className,
        this.favSubjects = studentAttributes.favSubjects
    }
    listSubjects() {
        return `My favorite subjects are ${this.favSubjects}.`;
    }
    PRAssignment(name, subject) {
        return `${name} has submitted a PR for ${subject}.`;
    }
    sprintChallenge() {
        return `${student.name} has begun sprint challenge on ${subject}.`
    }
}

// TEAM LEADS

class TeamLead extends Instructor {
    constructor(TLAttributes){
        super(TLAttributes);
        this.gradClassName = TLAttributes.gradClassName,
        this.favInstructor = TLAttributes.gradClassName,
        this.phrase = TLAttributes.phrase
    }
    standUp(channel) {
        return `${this.name} announces to ${channel} @channel ${this.phrase}`
    }
    debugsCode(name, subject) {
        return `${this.name} debugs ${name}'s code on ${subject}`
    }
}

class TeamLeadOne extends Instructor {
    constructor(TLAttributes){
        super(TLAttributes);
        this.gradClassName = TLAttributes.gradClassName,
        this.favInstructor = TLAttributes.gradClassName,
        this.phrase = TLAttributes.phrase
    }
    standUp(channel) {
        return `${this.name} announces to ${channel} @channel ${this.phrase}`;
    }
    debugsCode(name, subject) {
        return `${this.name} debugs ${name}'s code on ${subject}`
    }
}




const fred = new Person({
    name: 'Fred',
    age: 'stone age',
    location: 'Bedrock',
})

const amy = new PersonOne({
    name: 'Amy',
    age: '23',
    location: 'Canada',
})




const instructor = new Instructor({
    name: 'Bea',
    age: 28,
    location: 'California',
    specialty: 'being kind',
    favLanguage: 'Swift',
    catchPhrase: 'knowledge is power!',
})

const instructorOne = new InstructorOne({
    name: 'Cindy',
    age: 38,
    location: 'Kansas',
    specialty: 'being awesome',
    favLanguage: 'Ruby',
    catchPhrase: 'Hello students!',
})




const student = new Student({
    name: 'Chelsea',
    age: 21,
    location: 'USA',
    perviousBackground: 'works at a hair salon',
    className: 'WEB23',
    favSubjects: [
        'JS',
        'CSS',
        'HTML'
    ]
})

const studentOne = new Student({
    name: 'Bradley',
    age: 21,
    location: 'USA',
    perviousBackground: 'IOS Developer',
    className: 'DevMountain',
    favSubjects: [
        'Psychology',
        'IOS Development',
        'Math'
    ]
})



const teamLead = new TeamLead({
    name: 'Devin',
    age: 25,
    location: 'Texas',
    specialty: 'being super helpful',
    favLanguage: 'Java?',
    catchPhrase: 'BOOM!',
    gradClassName: 'WEB20',
    favInstructor: 'Josh Knell?',
    phrase: 'ready to rock!'
})

const teamLeadOne = new TeamLead({
    name: 'Kevin',
    age: 36,
    location: 'Florida',
    specialty: 'being a problem solver',
    favLanguage: 'CSS',
    catchPhrase: 'Catch ya later!',
    gradClassName: 'WEB20',
    favInstructor: 'Britt Hemming',
    phrase: 'standy time!'
})






console.log(fred.speak());

console.log(amy.talk());



console.log(instructor.demo('HTML'));

console.log(instructor.grade('Chelsea', 'her flexbox sprint'));

console.log(instructorOne.demo('JavaScript'));

console.log(instructorOne.grade('Teddy', 'his JS sprint'));



console.log(student.listSubjects());

console.log(studentOne.listSubjects());



console.log(teamLead.standUp('the 0th best TL channel in WEB23'));

console.log(teamLead.debugsCode('Chelsea', 'JavaScript'));

console.log(teamLeadOne.standUp('web23_Kevin'));

console.log(teamLeadOne.debugsCode('Bradley', 'Swift'));
