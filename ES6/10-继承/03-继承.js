var __extends = (this && this.__extends) || (function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf ||
      ({__proto__: []} instanceof Array && function (d, b) {
        d.__proto__ = b;
      }) ||
      function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
      };
    return extendStatics(d, b);
  };
  return function (d, b) {
    extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
})();
var Person = (function () {
  function Person(name, age, sex) {
    this.name = name;
    this.age = age;
    this.sex = sex;
  }

  Person.prototype.info = function () {
    console.log(this.name, this.age, this.sex);
  };
  return Person;
}());
var Student = (function (_super) {
  __extends(Student, _super);

  function Student(name, age, sex, score) {
    var _this = _super.call(this, name, age, sex) || this;
    _this.score = score;
    return _this;
  }

  Student.prototype.info = function () {
    _super.prototype.info.call(this);
    console.log(this.score);
  };
  return Student;
}(Person));
//实例化student
var stu = new Student("李四", 26, '男', 99);
stu.info();



