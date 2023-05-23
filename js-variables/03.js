// Hoisting:
console.log(x); // undefined / var is hoisted
console.log(y); // ReferenceError: Cannot access 'y' before initialization
console.log(c);  // ReferenceError: Cannot access 'c' before initialization

var x = 10
let y = 20
const c = 30