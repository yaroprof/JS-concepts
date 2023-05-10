// === 01 Global scope
// global variable can access anywhere in the program
// let a = 'hello'
// function greet(){
//   console.log(a);
// }
// console.log(greet());  // 'hello'

// === 01.1 Global scope
// global variable can be changed inside a function
// let a = 'hello'
// function greet() {
//   a = 'bye'
// }
// console.log(a);  // hello -> before changed
// greet()
// console.log(a);  // bye

// === 01.2 Global scope
// global variable without declaration automatically becomes a global variable

// function greet() {
//   a = 'earth';
//   console.log(`local variable: ${a}`);
// }
// greet(); //local variable: earth

// a = 'moon';
// console.log(`global variable yet: ${a}`);  // global variable yet: moon


// === 02 Local Scope

// let a = 'hello '
// function greet() {
//   let b = 'World'
//   console.log(a+b); // hello World
// }
// greet()
// console.log(a+b); // error - b is not defined

// === 02.1 Local Scope  - *let is block scope*







