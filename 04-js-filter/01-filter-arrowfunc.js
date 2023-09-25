// >>> Filter with arrow function
// - 01
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const evenNumbers = numbers.filter((number) => number % 2 === 0)

// console.log('Even numbers is: ', evenNumbers);

// - 02
// remove items with id
const data = [
  { id: 1, name: "John", age: 25 },
  { id: 2, name: "Jane", age: 30 },
  { id: 3, name: "Bob", age: 22 },
  { id: 4, name: "Alice", age: 28 },
];

const idsToRemove = [2, 4]
const filterData = data.filter(({ id }) => !idsToRemove.includes(id))
console.log(`Persons instead ids: ${idsToRemove}: `, filterData);
// console.log(filterData);
  

