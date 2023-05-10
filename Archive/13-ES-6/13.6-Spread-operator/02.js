// - Use the spread operator to copy an array, and then modify the copied array without modifying the original.
// const originArr = [1,2,3,4,5]
// const copyArr = [...originArr]
// copyArr.push(6)
// console.log(originArr); // [ 1, 2, 3, 4, 5 ]
// console.log(copyArr); // [ 1, 2, 3, 4, 5, 6 ]

// - Use the spread operator to combine two arrays

// const carDesc = ['model', 'color', 'price'];
// const addDesc = ['age', 'motor'];
// const fullDesc = [...addDesc, ...carDesc]
// console.log(fullDesc);  // [ 'age', 'motor', 'model', 'color', 'price' ]

// - Use the spread operator to combine two objects

// const personDesc1 = {name: 'John', secName: 'Doe'}
// const personDesc2 = {age: 35, job: 'dev'}
// const personFullDesc = {...personDesc1, ...personDesc2}
// console.log(personFullDesc);  // { name: 'John', secName: 'Doe', age: 35, job: 'dev' }

// - Use the spread operator to add new elements to the beginning of an array

// const numArr = [1,2,3,4,5]
// const addNumArr = [0, ...numArr]
// console.log(addNumArr);  // [ 0, 1, 2, 3, 4, 5 ]

// - Use the spread operator to pass the elements of an array as separate arguments to a function.

// let nums = [1,2,3]
// function sum(a,b,c) {
//   return a+ b + c
// }
// console.log(sum(...nums));  // 6