// === this- operator
// --- 01 function invoke as object properties - method

// const obj = {
//   foo: function () {
//     return this
//   }
// }
// console.log(obj.foo());

// --- 02 - using class constructor
// class Car{
//   constructor(model, color){
//     this.color = color,
//     this.model = model
//   }
// }
// const mazda = new Car('Mazda', 'red')
// console.log(`model: ${mazda.model} color: ${mazda.color}`);

// --- 03- without binding for any object- independance.

const getName = function () {
  console.log(this);
}
getName()