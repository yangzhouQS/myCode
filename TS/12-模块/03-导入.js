"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
/*import {demo} from "./02-导出"

//实现接口
class Person implements demo {
  age: number;
  name: string;

  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

let p: Person = new Person('lisi', 26);
console.log(p);
*/
// @ts-ignore
var _02___1 = require("./02-\u5BFC\u51FA");
var Stu = /** @class */ (function (_super) {
    __extends(Stu, _super);
    function Stu(name, age, gender) {
        var _this = _super.call(this, name, age) || this;
        _this.gender = gender;
        return _this;
    }
    return Stu;
}(_02___1.Person));
var stu = new Stu('大牛', 26, '男');
stu.info();
