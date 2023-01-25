// // === 01- the Object literal
// let person = {
//   name: 'Peter',
//   age: 35,
//   job: 'dev'
// }
// console.log(person);
// console.log(typeof person); // object

// === 02- using Instance of Object Directly
// const country = new Object({
//   name: 'Uktaine',
//   capital: 'Kyiv',
//   someRivers: ['Dnipro', 'Desna', 'Bug'],
//   greet: function(){
//     console.log(`Hello, I am from ${this.name}`);
//   }
// })
// console.log(typeof country);
// console.log(country.someRivers);
// console.log(country.greet());
// object
// [ 'Dnipro', 'Desna', 'Bug' ]
// Hello, I am from Uktaine    


// === 03- using Constructor function
// function Person (){
//   this.name= 'John',
//   this.age= 35,
//   this.job= 'dev',
//   this.greet= function () {
//     console.log(`Hey , my name is ${this.name}`);
//   },
//   this.score= {
//     maths: 90,
//     science: 100
//   }
// }

// const person = new Person()
// console.log(typeof person );
// console.log(person.name);
// console.log(person.greet());
// console.log(person.score.maths);

// === 04- using Class

// class Person{
//   constructor(name, age, job){
//     this.name= name;
//     this.age = age;
//     this.job = job;
    
//   }
// }
// const person1 = new Person('John', 35, 'dev')
// const person2 = new Person('Peter', 25, 'designer')

// console.log(typeof person2);
// console.log(person2.name);
// console.log(person2.age);
// object
// Peter
// 25   


// === 04.1 - using Class with Method
class Person{
  constructor(name){
    this.name = name
  }
  greet(){
    console.log(`Hey my name is ${this.name}`);
  }
}
let person1 = new Person('John')
let person2 = new Person('Bob')
console.log(person1.name);
console.log(person2.name);
console.log(person2.greet());










