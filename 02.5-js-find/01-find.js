// >>> Array find

// - 01 - find person for username
// const data = [
//   { id: 1, name: 'John', age: 25 },
//   { id: 2, name: 'Jane', age: 30 },
//   { id: 3, name: 'Bob', age: 22 },
//   { id: 4, name: 'Alice', age: 28 },
// ];

// const findPerson = (name) => data.find((person) => person.name === name);
// const person = findPerson('Jane');
// console.log(person);


// - 02 - change users name

const data = [
  { id: 1, name: "John", age: 25 },
  { id: 2, name: "Jane", age: 30 },
  { id: 3, name: "Bob", age: 22 },
  { id: 4, name: "Alice", age: 28 },
];

const updateAge = (id, newAge) => {
  const personIndex = data.findIndex((person) => person.id === id)
  if (personIndex !== -1) {
    data[personIndex].age = newAge
  }
}
updateAge(2, 150)
console.log("Changed user age:", data);






// const updateAge = (id, newAge) => {
//   const personIndex = data.findIndex((person) => person.id === id)
//   if (personIndex !== -1) {
//     data[personIndex].age = newAge
//   }
// }

// updateAge(3, 35)
// console.log(data);