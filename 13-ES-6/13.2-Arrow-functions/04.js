//  Use an arrow function to sort an array of strings alphabetically
let array = ['war', 'peace', 'aha', 'boneyM']
let wordsSort = array.sort((a,b) => a.localeCompare(b))
console.log(wordsSort);