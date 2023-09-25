// >>> Array Filter
//-01
// const data = [
//   { id: 1, name: "John", age: 25 },
//   { id: 2, name: "Jane", age: 30 },
//   { id: 3, name: "Bob", age: 22 },
//   { id: 4, name: "Alice", age: 28 },
// ];

// const olderThan = data.filter((person) => person.age > 25)
// console.log('Persons older than: ', olderThan );

// -02
const data = [
  { id: 1, name: "John", age: 25 },
  { id: 2, name: "Jane", age: 30 },
  { id: 3, name: "Bob", age: 22 },
  { id: 4, name: "Alice", age: 28 },
];
const olderThan = data.filter((person) => person.age > 25)
const result = olderThan.map((person) => ({
  name: person.name,
  age: person.age
}))
console.log('Persons older than 25 years: ', result)