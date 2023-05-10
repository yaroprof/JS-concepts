// - Using call() to set the context of a function:
// - 01
// const library = {
//   book: '1984',
//   author: 'Orwell',

// };
// const getBook =  function(greeting) {
//   return `${greeting} this is a book ${this.book} by author ${this.author}`
// }
// console.log(getBook.call(library, 'Hello'));

// - 02
// const person = {
//   name: 'Peter',
//   job: 'designer',
//   age: 35
// }
// const greet = function (greeting) {
//   return `${greeting}, my name is ${this.name} Im ${this.age} and my prof is ${this.job}`
// }
// console.log(greet.call(person, 'Howdy'));

// -03
// const gadget = {
//   item: 'phone',
//   name: 'Samsung',
//   color: 'black',
// };
// const description = function (greet) {
//   return `${greet} Lets take ${this.item} the brand is ${this.name} and ${this.color} color`;
// };
// console.log(description.call(gadget, 'Hi'));
