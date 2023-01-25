// - Using this to access an object's properties:
const person = {
  name: 'John',
  age: 34,
  job: 'dev',
  greet: function () {
    console.log(`Hey I am ${this.name} I am ${this.age} and I've work: ${this.job}`);
  }
}
person.greet();