Class constructor syntax
01
class Employees {
  constructor (name, job, skill){
    this.name = name;
    this.job = job;
    this.skill = skill;
  }
  greet(){
    console.log(`Hi my name is ${this.name} I'm ${this.job} and I have: ${this.skill} main skill`);
  }
}

const peter = new Employees('Peter', 'dev', 'JS')
peter.greet()

const john = new Employees('John', 'designer', 'Figma')
john.greet()


