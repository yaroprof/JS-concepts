// Block scope

{
  let x = 10
  const y = 20
  var c = 30
}

console.log(x); // ReferenceError: x is not defined (let has block scope)
console.log(y);  // ReferenceError: y is not defined / const has block scope
console.log(c); // 30 / var has function scope