class Person {
  constructor(name) {
    this.name = name;
    this.age = this.randomize(); //this disini merefer ke class person,bukan constructor
  }
  randomize() {
    return Math.floor(Math.random(100) * 100);
  }
}
const p = new Person();
document.getElementById("demo").innerHTML = `${p.age}&nbsp;<-- angka random`;
document.getElementById(
  "demo1"
).innerHTML = `${p.randomize()}&nbsp;<-- angka random`;
console.log(p.age);
console.log(p.randomize());
// result
// 74 -> angka random
// 54 -> angka random

// Static Method
class Something {
  static randomize() {
    return Math.random(100) * 100;
  }
  //   static log(str),
  //   console.log(str)
}
const a = Math.floor(Something.randomize());
document.getElementById("demo2").innerHTML = a;
console.log(Math.floor(Something.randomize()));
//result
// 79

// Getter
class Person1 {
  constructor(newName, newAge) {
    this.name = newName;
    this.age = newAge;
  }
  get getName() {
    return this.name;
  }
}
const b = new Person1("Me", 26);
const c = b.getName;
console.log(c);
document.getElementById("demo3").innerHTML = c;
// result
// Me

class Persons {
  constructor(newName, newAge, gender) {
    this.name = newName;
    this.age = newAge;
    this.gender = gender;
  }
  get getName() {
    return (this.gender === "L" ? "Halo Tuan " : "Halo Nyonya") + this.name;
  }
}
const x = new Persons("Cyclops", 26, "L");
const y = x.getName;
document.getElementById("demo4").innerHTML = y;
console.log(y);
//result
// Halo Tuan Cyclops

// Getter Setter
class Person3 {
  constructor(newName, newAge) {
    this.name = newName;
    this.age = newAge;
  }
  get getName() {
    return this.name;
  }
  set setName(changedName) {
    this.name = changedName;
  }
}
const q = new Person3("Me", 26);
const r = q.getName;
const s = (this.setName = "you");
document.getElementById("demo5").innerHTML = r;
document.getElementById("demo6").innerHTML = s;
console.log(r);
console.log(s);
// result
// Me
// You

//
class Ongkir {
  constructor(weight) {
    this.pajak = 1000;
    this.biaya = this.calculatePrice(weight);
  }
  calculatePrice(weight) {
    return this.biaya + this.pajak;
  }
}

const ongkir = new Ongkir(20); //-> 20 adalah berat / kg
console.log(ongkir.totalPrice);
// result -> 20 * 1000
// 210000

ongkir.pajak = 2000;
console.log(ongkir.totalPrice);
// result
// 220000
