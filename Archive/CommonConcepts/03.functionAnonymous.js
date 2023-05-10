// === 01 anonymous func as an argument 

// setTimeout(() => {
//   console.log('Execute after som time');
// }, 1000);

// === 02 Immediately inviked func.execution
// (function() {
//   console.log('IIFE');  // IIFE
// })()

// === 03 another object as argument in anonymous func 

let person = {
  firstName: 'Peter',
  age: 35
}
(function () {
  console.log(`Hey my name is ${person.firstName} and I am ${person.age} old`);
})(person)