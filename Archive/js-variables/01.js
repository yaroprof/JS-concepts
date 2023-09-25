// --- Variable reassignment:

// let
let num1 = 10
console.log(num1 = 20);  // 20 - valid, value can be reassigned

// const
const num2 = 25
num2 = 45
console.log(num2);  // TypeError: Assignment to constant variable./ const variable are read only

// var
var num3 = 40
num3 = 55
console.log(num3);  // 55 - - valid, value can be reassigned