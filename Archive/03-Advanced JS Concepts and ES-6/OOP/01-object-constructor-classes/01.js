// Define a class for creating a Person object
class Person{
  constructor(name, age, location){
    this.name = name;
    this.age = age;
    this.location = location;
  }
  sayHello(){
    console.log(`Hi, my name is ${this.name} and I'm ${this.age} years old. I am from ${this.location}`);
  }
}

// Creating a two person objects

const person1 = new Person('Peter', 35, 'London')
person1.sayHello()

const person2 = new Person('John', 44, 'New York')
person2.sayHello()