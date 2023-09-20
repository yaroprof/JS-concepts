class Vehicle{
  constructor(make, model, year, fuelType){
    this.make = make;
    this.model = model;
    this.year = year;
    this.fuelType = fuelType
  }
  start(){
    console.log(`${this.make} ${this.model} is starting  `);
  }
  stop(){
    console.log(`${this.make} ${this.model} is stopping `);
  }
}

class newGear extends Vehicle{
  constructor(make, model, year, fuelType, newColor){
    super(make, model, year,fuelType)
    this.newColor = newColor;
  }
}

class Car extends Vehicle{
  constructor(make, model, year, fuelType, numDoors){
    super(make, model, year,fuelType);
    this.numDoors = numDoors;
  }
  // changeGear(gear){
  //   console.log(`${this.make} ${this.model} changed to ${gear}`);
  // }

}



let myCar = new Car("Honda", 'Accord', 2020, 'gas', 4)
console.log(myCar.make);
console.log(myCar.numDoors);
myCar.start()
myCar.stop()
myCar.changeGear('Volvo')
myCar.newColor('Red')