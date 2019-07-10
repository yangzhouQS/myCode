var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//父类
var People = /** @class */ (function () {
    function People(name, age) {
        this.name = name;
        this.age = age;
        this.weight = 120;
    }
    People.prototype.getName = function () {
        console.log('name = ', this.name);
    };
    People.prototype.getAge = function () {
        console.log('age = ', this.age);
    };
    return People;
}());
//继承
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, age, number) {
        var _this = _super.call(this, name, age) || this;
        _this.number = number;
        return _this;
    }
    Student.prototype.getWeight = function () {
        console.log('weight = ', this.weight);
    };
    return Student;
}(People));
// @ts-ignore
var xiaoming = new Student('小明', 26);
xiaoming.getName();
xiaoming.getAge();
xiaoming.getWeight();
