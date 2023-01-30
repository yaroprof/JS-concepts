// - 01 Doubling the elements of an array:

// let numbers = [3,5,7,9,11]
// let double = numbers.map( num => num * 2 )
// console.log(double);  // [ 6, 10, 14, 18, 22 ]

// 02 - Transforming an array of objects:
// let users = [{name: 'Peter', age: 32}, {name: 'John', age: 45}]
// let names = users.map( user => user.name )
// console.log(names);

// - 03 - Changing the structure of an array of objects

let users = [{name: 'Peter', age: 23}, {name: 'John', age: 25}]
let newUsers = users.map( user => {
  return{
    fullName: user.name + ' ' + user.age,
    age: user.age
  }
} )
console.log(newUsers);