// 01 - Create a function that returns a function that increments a counter each time it is called.

// function createCounter() {
//   let count = 0
//   return function () {
//     count++
//     return count
//   }
// }
// const counter = createCounter()
// console.log(counter());


// 02- Create a function that takes a value and returns a function that multiplies the value by the input number.

// const multiPlayer = (num) =>{
//   return function (value) {
//     return num * value;
//   }
// }
// const double = multiPlayer(2)
// console.log(double(5));

// const triple = multiPlayer(3)
// console.log(triple(7));


// 03- Create a function that maintains a private list and has methods for adding and retrieving items from the list.

// function createList() {
//   const list = []
//   return{
//     add: function (item) {
//       list.push(item)
//     },
//     retrieve: function () {
//       return list
//     }
//   }
// }
// const listItem = createList()
// listItem.add('Item-1')
// listItem.add('item - 2')
// console.log(listItem.retrieve());


// - 04 - Create a function that maintains a private counter and has methods for incrementing and getting the current value of the counter.

// const createCounter = () =>{
//   let count = 1
//   return{
//     add: function () {
//       count++
//     },
//     res: function () {
//       return count
//     }
//   }
// }
// const setCount = createCounter()
// setCount.add()
// setCount.add()
// console.log(setCount.res());


// - 05- Create a function that takes a value and returns a function that decrements the value by 1 each time it is called.
// 05.1
// const decrements = (n) =>{
//   let num = n
//   return{
//     remove: function () {
//       num--
//     },
//     res: function () {
//       return num
//     }
//   }
// }
// const setDecrements = decrements(32)
// setDecrements.remove()
// console.log(setDecrements.res());

// 05.2
const decrement = (value) =>{
  return function () {
    value--
    return value
  }
}
const setDecrements = decrement(5)
console.log(setDecrements());
























