"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var _02_email_1 = require("./02-email");
var Person = /** @class */ (function () {
    function Person(name, surname, emaile) {
        this.name = name;
        this.surname = surname;
        this.emaile = emaile;
    }
    Person.prototype.info = function () {
        console.log(this.name, this.surname, this.emaile);
    };
    return Person;
}());
// noinspection UnterminatedStatementJS
var Teacher = /** @class */ (function (_super) {
    __extends(Teacher, _super);
    function Teacher(name, surname, emaile, subjects) {
        var _this = _super.call(this, name, surname, emaile) || this;
        _this.subjects = subjects;
        return _this;
    }
    /**
     * 重写父类的info()方法
     */
    Teacher.prototype.info = function () {
        _super.prototype.info.call(this);
        console.log(this.subjects);
    };
    Teacher.prototype.tech = function () {
        console.log("teach");
    };
    return Teacher;
}(Person));
var teacher = new Teacher("丽丽", "李老师", new _02_email_1.Email("www@qq.com"), ['数学', '英语', '化学']);
teacher.tech();
teacher.info();
