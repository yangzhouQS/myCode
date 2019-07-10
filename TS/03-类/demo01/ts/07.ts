// @ts-ignore
class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    greet(name?: string) {
        if (name) {
            return 'hello ' + name;
        }
        else {
            return this.name + "," + this.age;
        }
    }
}
// @ts-ignore
let person = new Person("李四", 26);
console.log(person.greet(person.name));
console.log(person.greet());
console.log(person);