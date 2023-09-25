// >>> Objects destructuring
// -01
// const printPerson = (({ name, age }) => {
//   console.log(`name is ${name} ${age} years old`);
// })
// const person = { name: 'John', age: 35 }

// printPerson(person)

// -02 - object destructuring within function parameters
// function personsPrint({name, job}) {
//   console.log(`His name is ${name} and he is ${job} `);
// }
// const person = {name: 'Peter', job: 'Dev'}
// personsPrint(person)

// - 03 - object destructuring with pseudonames
// const employee = { firstName: "John", lastName: 'Doe', age: 35, jobTitle: "Dev" }
// const { firstName: first, lastName: second, age: old, jobTitle: job } = employee;

// console.log(`First name is ${first}, last name: ${second} ${old} age and he is ${job} -position`);



