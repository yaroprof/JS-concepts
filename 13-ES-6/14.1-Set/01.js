// 01-  Set is a collection of unique values, without key-value pairs.

let set = new Set()
set.add(1)
set.add('test')
set.add([1,2,3])
set.add({name: 'Peter', age: 35})

// - get entries using - forEach
// set.forEach((value) =>{
//   console.log(value);
// })

// - get entries using - for
// for (const [key] of set.entries()){
//   console.log(key);
// }

// - onvert Set object to an Array object, with Array.from
// const myArr = Array.from(set)
// console.log(myArr);  // [ 1, 'test', [ 1, 2, 3 ], { name: 'Peter', age: 35 } ]