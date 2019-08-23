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

const student = new Student({
    name: 'Chelsea',
    age: 21,
    location: 'USA',
    perviousBackground: 'worked at a hair salon',
    className: 'WEB23',
    favSubjects: [
        'JS',
        'CSS',
        'HTML'
    ]
})





console.log(fred.speak());

console.log(amy.talk());

console.log(instructor.demo('HTML'));

console.log(instructor.grade('Chelsea', 'her math test'));

console.log(student.listSubjects());