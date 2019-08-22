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

//INSTRUCTOR

class Instructor extends Person {
    constructor(moreAttributes){
        super(moreAttributes);
        this.specialty = moreAttributes.specialty,
        this.favLanguage = moreAttributes.favLanguage,
        this.catchPhrase = moreAttributes.catchPhrase
    }
    demo(subject) {
        return `Today we are leaning about ${subject}`
    }
    grade() {
        return `${student.name} recieves a perfect score on ${subject}.`;
    }
}

//STUDENT

class Student extends Instructor {
    constructor(studentAttributes){
        super(studentAttributes);
        this.perviousBackground = studentAttributes.perviousBackground,
        this.className = studentAttributes.className,
        this.favSubject = studentAttributes.favSubject
    }
    listSubjects() {
        `My favorite subjects are ${this.favSubject}, ${this.favSubject}, and ${this.favSubject}.`;
    }
    PRAssignment() {
        `${student.name} has submitted a PR for ${subject}.`;
    }
    sprintChallenge() {
        `${student.name} has begun sprint challenge on ${subject}.`
    }
}






const fred = new Person({
    name: 'Fred',
    age: 'stone age',
    location: 'Bedrock',
})

const instructor = new Instructor({
    name: 'Sandy',
    age: 28,
    location: 'California',
    specialty: 'being kind',
    favLanguage: 'Swift',
    catchPhrase: 'knowledge is power!',
})





console.log(fred.speak());