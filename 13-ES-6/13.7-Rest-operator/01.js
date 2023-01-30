// - if you have an array called "numbers" and you want to gather all elements after the first two into a new array called "remaining", you can use the rest operator like this
// - 01
// const numbers = [1,2,3,4,5]
// const [first, second, ...remaining] = numbers
// console.log(remaining);  // [ 3, 4, 5 ]

//- 02
// const cars = ['BMW', 'Volvo', 'Mazda', 'Opel', 'Jeep']
// const [first, second, third, ...others] = cars
// console.log(others);  // [ 'Opel', 'Jeep' ]


// - In a function, the rest operator can be used to gather all remaining arguments into a new array

// function printArg(first, second, ...remaining){
//   console.log(`first: ${first}`);
//   console.log(`second: ${second}`);
//   console.log(`remaining: ${remaining}`);
// }
// printArg(1,2,3,4,5,6,7)