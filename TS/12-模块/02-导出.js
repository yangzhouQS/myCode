"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//接口的实现,并且重新导出
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    ;
    Person.prototype.info = function () {
        console.log(this.name, this.age);
    };
    return Person;
}());
exports.Person = Person;












