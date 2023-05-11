// Constructor function syntax
// v01
// function Person(name, age) {
//   this.name = name;
//   this.age = age
// }
// Person.prototype.greet = function () {
//   console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old`);
// }

// const john = new Person('John', 35)
// john.greet()

// v02
// function Book(title, author) {
//   this.title = title;
//   this.author = author;
// }
// Book.prototype.addBook = function () {
//   console.log(`Book-shelf list has ${this.title} book ${this.author}`);
// }
// const sea = new Book('Deep Sea', 'D.Crash')
// sea.addBook()

// v03
function Country(cauntryName, capital, age) {
  this.cauntryName = cauntryName;
  this.capital = capital;
  this.age = age;
}
Country.prototype.myCountry = function () {
  console.log(`I'm from ${this.cauntryName} the capital is: ${this.capital} and its ${this.age} years old`);
}

const ukraine = new Country('Ukraine', 'Kyiv', 2000)
ukraine.myCountry()