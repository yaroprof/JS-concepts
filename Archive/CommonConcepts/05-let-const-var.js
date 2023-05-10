// === 01 let- block scope
/*
// let a = 'hello ';
// function greet() {
//   let b = 'world';
//   console.log(a + b); // hello world

//   if (b == 'world') {
//     let c = 'hello';
//     console.log(a + ' ' + b + ' ' + c); // hello  world hello
//   }

//   console.log(a + ' ' + b + ' ' + c); // error - c is not defined
// }

// greet();

// === 01.1 let- block scope
// let can be updated but not re-declared.
// - updating
// let greeting = "say hi"
// greeting = 'say bye'
// console.log(greeting);  //say bye

// === 01.1.1 let- block scope, the same block
// let greeting = "say hi"
// let greeting = 'say bye'
// console.log(greeting);  // error

// === 01.1 let- block scope; redeclaration in different blocks
// let greeting = 'say hi'
// if(true){
//   let greeting = 'world'
//   console.log(greeting);  // world
// }
// console.log(greeting);  // say hi

*/

// === 02.1 const ---  maintain constant values
/*
// const a = 'hello'
// console.log(a);  // hello
// a = 'moon'
// console.log(a);  // error - Assignment to constant variable

// === 02.2 const --- can be access within the block
// 01
// const num = 123
// if (num == 123) {
//   console.log('Bingo');
// }

if (true) {
  const num = 123
  // console.log(num);  // 123
}
console.log(num);  // ReferenceError: num is not defined
*/

// === 03 var
// --- 01
// var say = 'hi'
// var say = 'world'
// console.log(say); // world

// --- 02
// var num = 123
// num = 456
// console.log(num); // 456

// --- var Hoisting
// console.log(greeter);  // undefined
// var greeter = 'hi'

// --- var problems










