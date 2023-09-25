// create start array
const data = [
  {id: 1, name: 'John', age: 25},
  {id: 2, name: 'Peter', age: 35},
  {id: 3, name: 'Bob', age: 32},
  {id: 4, name: 'Franc', age: 45},
  {id: 5, name: 'Denis', age: 25},
]

// upload Name and age each of the persons, using destruction and arrow functions
console.log('Name of the each persons: ');

data.forEach(({ name, age }) => {
  console.log(`Name user is: ${name} age: ${age} years old`);
})