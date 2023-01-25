// === Bind method -> change this context
// - 01
// const getMoney = function () {
//   return this.money
// }
// const getPeterMoney = getMoney.bind({money: 500})
// const getJohnMoney = getMoney.bind({money: 1000})
// console.log(getPeterMoney());
// console.log(getJohnMoney());
// - 02
// const bookName = function () {
//   return this.name;
// };
// const newBook = bookName.bind({ name: '1984' });
// console.log(newBook());

// === Call method -> can using context other objects
// - 01
// const person = {
//   fullName: function () {
//     console.log(`His name is ${this.name} and he has ${this.age} old`);
//   },
// };
// const person1 = {
//   name: 'Peter',
//   age: 35,
// };

// - 02
// const person2 = {
//   name: 'Jacob',
//   age: 43,
// };

// person.fullName.call(person2);

// === Call method -> can accept arguments
//- 01
// const person = {
//   fullName: function (city, country) {
//     console.log(`${this.firstName} ${this.lastName} from ${city} , ${country}  `);
//   }
// }

// const person1 = {
//   firstName: 'John',
//   lastName: 'Doe'
// }

// const person2 ={
//   firstName: 'Bob',
//   lastName: 'Drake'
// }

// person.fullName.call( person2, 'Kyiv', 'Ukraine' )

// - 02
// const book = {
//   bookDescription: function (libraryPlace, city) {
//     console.log(`This book ${this.name} by author ${this.authorName} from ${libraryPlace}, ${city} city`);
//   }
// }
// const book1 = {
//   name: '10 monkeys',
//   authorName: 'D.London'
// }

// const book2 = {
//   name: '1984',
//   authorName: 'D.Orwell'
// }

// book.bookDescription.call(book1, 'Institute', 'Chicago')


// === Apply method

const cars = {
  fullModel: function (age, country) {
    console.log(`This car is ${this.model}  ${this.color} color, ${age} old and from ${country}`);
  }
}
car1 = {
  model: 'BMW',
  color: 'black'
}

car2= {
  model: 'Mazda',
  color: 'red'
}

cars.fullModel.apply(car1, [5, 'Germany'])



















