person = {
  name: 'Bob',
  age: 34,
};
const greeting = function () {
  return `Hey, My name is ${this.name} ${this.age}`;
};

const personInfo = greeting.bind(person);
console.log(personInfo());
