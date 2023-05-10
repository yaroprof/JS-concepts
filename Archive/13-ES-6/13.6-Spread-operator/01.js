// - use spread operator to merge 2 arrays into one

  // let arr1 = [1,2,3,4,5]
  // let arr2 = [6,7,8,9,10]
  // let newArr = [...arr1, ...arr2]
  // console.log(newArr);

  // [
  //   1, 2, 3, 4,  5,
  //   6, 7, 8, 9, 10 
  // ]

// - to pass the elements of an array as separate arguments to a function

// let arr = [1,2,3,25,4,5]
// console.log(Math.max(...arr));  // 25

// - to copy an array

// let arr = [1,2,3,4,5]
// let copyArr = [...arr]
// console.log(`copy arr is: ${copyArr} `);  // copy arr is: 1,2,3,4,5 

// - spreat operator can be used with objects as well - merge objects

// let person = {name: 'Peter', job: 'dev'}
// let desc = {age: 35, hairColor: 'dark'}
// let descArr = {...person, ...desc}
// console.log(descArr);

