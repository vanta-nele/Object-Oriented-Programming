class Person {
    constructor(name, age, interests) {
        this.name = name;
        this.age = age;
        this.interests = interests;
    }
    hello(){
        return(`Hello, my name is ${this.name} and I am ${this.age} years old. My interests include ${this.interests}`)
    }
}

let person = new Person("Ryan",30,"being a hardarse, agile and ssd hard drives.")
let greeting = person.hello();
console.log(greeting)

module.exports = Person