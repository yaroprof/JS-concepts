// === Call Back Functions

// --- without CBF - calculator-app
// 01
// calculation let showResult to describe result
// poblem: we cannot prevent the calculation func. to displaying result
// function showResult(res){
//   console.log(res);
// }

// function calculation(a,b) {
//     let sum = a + b
//     showResult (sum)
// }
// calculation(2,3)

// 02
// problem: need to call the both functions
// const display = (sum) =>{
//   console.log(sum);
// }
// const calc = (num1, num2) =>{
//   let sum = num1 + num2
//   return sum
// }
// let result = calc(5,3)
// display(result)

// --- using CBF- function 'showResult' - CBF? which can be invoke after main function- 'calc' is finish.
// showResult it is calleed a CBF it is passed to calc as an argument
// 01
// const showResult = (res) => console.log(res);
// const calc = (num1, num2, myCallBack) =>{
//   let sum = num1 + num2
//   myCallBack(sum)
// }
// calc(5, 7, showResult)  // 12

// 02
// const myNumbers = [3,5,7,-2,4,-6]

// removeNeg (myNumbers, (x) => x >=0)
// function removeNeg(numbers, callback) {
//   const myArray= []
//   for(const x of numbers){
//     if ( callback(x) ) {
//       myArray.push(x)
//     }
//   }
//   console.log(myArray);
// }

// 03 with asynchronius func.

// setTimeout(greet, 1000);
// function greet(){
//   console.log('Hello');
// } 


