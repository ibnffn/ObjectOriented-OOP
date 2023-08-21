// Properti private adalah properti yang tidak bisa diakses dari luar.

// get & properti
class Person {
  //tanda pagar disini menandakan bahwa relationship adalah properti private
  #relationship;
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.#relationship = "In shambles";
  }
  get getRelationship() {
    return this.#relationship;
  }
  getRelation() {
    return this.#relationship;
  }
}
const person = new Person("You", 7200);
console.log(person.getRelationship);
console.log(person);
console.log(person.getRelation());
document.getElementById("demo").innerHTML = person.getRelationship;
document.getElementById("demo1").innerHTML = person;
//result

// "In shambles";
// Person {name: 'You', age: 7200, #relationship: 'In shambles'}
// age: 7200
// name: "You"
// #relationship: "In shambles"
// getRelationship: (...)
// [[Prototype]]: Object

// In shambles

class Ongkir {
  pajak;
  constructor(weight) {
    this.pajak = 1000;
    this.biaya = this.calculatePrice(weight);
  }
  calculatePrice(weight) {
    return weight * 2000;
  }
  get totalPrice() {
    return this.pajak + this.biaya;
  }
}

const ongkir = new Ongkir(20); //-> 20 adalah berat / kg
console.log(ongkir.totalPrice);
ongkir.pajak = 2000;
console.log(ongkir.totalPrice);
// result -> 20 * 2000 + 1000
// 41000
// 42000

// inheritance
class People {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.job = "Jobless";
  }
  get getJob() {
    return this.job;
  }
}

//child class
class PersonWithJob extends People {
  constructor(name, age, job) {
    //super dibawah ini bisa dianggap sebagai new people(name,age)
    super(name, age);
    this.job = "Software Engineer";
  }
}

const you = new People();
const me = new PersonWithJob();
console.log(you.getJob); // 'Jobless'
console.log(me.getJob); // 'Software Engineer'

// Polymorphism
class Indonesian {
  constructor(name) {
    this.name = name;
  }
  greeting() {
    return `Halo, nama saya ${this.name}`;
  }
}

class Javanese extends Indonesian {
  constructor(name) {
    super(name);
  }
  greeting() {
    return `Whathasi no namae wa ${this.name}`;
  }
}
const indonesian = new Indonesian("You");
const javanese = new Javanese("Sirachan");
console.log(indonesian.greeting());
console.log(javanese.greeting());
// Halo,nama saya You
// Whathasi no namae wa Sirachan

// Abstraction
// class Indonesian {
//   constructor(name) {
//     this.name = name;
//   }
//   greeting() {
//     return `Halo, nama saya ${this.name}`;
//   }
// }

// class Javanese extends Indonesian {
//   constructor(name) {
//     super(name);
//   }
//   greeting() {
//     return `Whathasi no namae wa ${this.name}`;
//   }
// }
