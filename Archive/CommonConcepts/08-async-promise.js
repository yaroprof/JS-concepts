// === Promises

let promise = new Promise(function (resolve, reject) {});

// 01

// const count = true;

// let countValue = new Promise(function (resolve, reject) {
//   if (count) {
//     resolve('There is a count value');
//   } else {
//     reject('There is no a count value');
//   }
// });

// console.log(countValue);

// 02 - promise with '.then'
// let countValue = new Promise(function (resolve, reject) {
//   resolve('Promise resolved');
// });
// countValue
//   .then(function (result) {
//     console.log(result);
//   })
//   .then(function () {
//     console.log('Accept');
//   });


// 03 - promise with catch

// let countValue= new Promise(function (resolve,reject) {
//   reject('Promise rejected')
// })
// countValue
//   .then(function successValue (result) {
//     console.log(result);
//   })
//   .catch(function errorValue (result) {
//     console.log();
//   })


// 04 - finally() method

let countValue = new Promise(function(resolve, reject){
  resolve('Promise resolved')
})
countValue.finally(
  function greet() {
    console.log('This code is executed');
  }
)



















