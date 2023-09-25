// - Avarage age all users account
const data = [
  { id: 1, name: "John", age: 25 },
  { id: 2, name: "Jane", age: 30 },
  { id: 3, name: "Bob", age: 22 },
  { id: 4, name: "Alice", age: 28 },
];

const averageAge = data.reduce((totalAge, person) => totalAge + person.age, 0) / data.length
 console.log('Average users age: ', averageAge);