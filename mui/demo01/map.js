let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(arr.map(x => x * x));
class Animat {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}
	sayName() {
		return this.name + " - " + this.age;
	}
}
class Dog extends Animat {
	constructor(name, age, sex) {
		super(name, age);
		this.sex = sex;
	}
	sayHello() {
		console.log(this.name, this.age, this.sex);
	}
}
let d=new Dog("阿黄",26,'xy');
d.sayHello();
d.sayName();