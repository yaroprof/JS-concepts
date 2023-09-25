// >>> Array find

// - 01 - find person for username
const data = [
  { id: 1, name: 'John', age: 25 },
  { id: 2, name: 'Jane', age: 30 },
  { id: 3, name: 'Bob', age: 22 },
  { id: 4, name: 'Alice', age: 28 },
];

const findPerson = (name) => data.find((person) => person.name === name);
const person = findPerson('Jane');
console.log(person);
