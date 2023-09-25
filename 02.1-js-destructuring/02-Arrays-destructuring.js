// >>> Arrays destructuring
// - 01
// const numbers = [1, 2, 3, 4, 5]
// const [first, second, ...rest] = numbers
// console.log(`first: ${first}`);
// console.log(`second: ${second}`);
// console.log(`rest: ${rest}`);

// - 02
// function getFirstAndLast([first, , , , , , last]) {
//   console.log(`First element: ${first}`);
//   console.log(`Last element: ${last}`);
// }

// const elements = [1, 2, 3, 4, 5, 6, 7];

// getFirstAndLast(elements);

// - 03 using default parameters
// const numbers = [1, 2]
// const [first, second, third = 0] = numbers

// console.log(`first num is ${first}`);
// console.log(`second num is ${second}`);
// console.log(`third num is ${third}`);

// - 04 dest. array in function param. with default property

// const processNumber = ([first, second= 35]) => {
//   console.log(`First element is ${first}`);
//   console.log(`Second element is ${second}`);
// }
// myArr = [10]
// processNumber(myArr)

// - 05 dest. array inner object

const person = {
  name: 'John',
  scores: [57, 35, 85, 94],
};
const {
  name,
  scores: [math, english, science, history],
} = person;
console.log(
  `The student name is ${name}, his scores is, math: ${math}: ,english: ${english}, science: ${science}, history: ${history}`,
);
