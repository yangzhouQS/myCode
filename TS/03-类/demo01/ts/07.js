// @ts-ignore
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.greet = function (name) {
        if (name) {
            return 'hello ' + name;
        }
        else {
            return this.name + "," + this.age;
        }
    };
    return Person;
}());
// @ts-ignore
var person = new Person("李四", 26);
console.log(person.greet(person.name));
console.log(person.greet());
console.log(person);
