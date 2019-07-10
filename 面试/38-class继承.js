/*function Animal() {
  this.eat = function () {

  }
}

Animal.prototype.say = function () {
  console.log('Animal say');
}

function Dog() {
  this.bark = function () {
    console.log('dog dark');
  }
}

Dog.prototype = new Animal();
var d = new Dog();
d.bark();
d.bark();
d.say();*/

class Animal {
  eat() {
    console.log('animal eat');
  }
}

class Dog extends Animal {
  dark() {
    console.log('dao dark');
  }
}
let d=new Dog();
d.dark();
d.eat();