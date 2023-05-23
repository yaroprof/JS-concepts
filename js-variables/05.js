// Block-level redeclaration:

let x = 10
const y = 20
var c = 30

{
  let x = 40
  const y = 50
  var c = 60

  console.log(`Block scope: ${x}, ${y}, ${c}`);
}
console.log(`Global scope: ${x}, ${y}, ${c}`); // (var is not block-scoped)