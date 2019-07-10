"use strict";
class Person {
    //构造函数,创建对象时及进行实例的初始化
    constructor(username, userage, gender) {
        this.username = username;
        this.userage = userage;
        this.gender = gender;
    }
    toString() {
        return `username = ${this.username} age = ${this.userage} gender = ${this.gender}`;
    }
}
class Student extends Person {
    constructor(username, userage, gender, numid) {
        super(username, userage, gender);
        this.username = username;
        this.userage = userage;
        this.gender = gender;
        this._numid = numid;
    }
    get numid() {
        return this._numid;
    }
    set numid(value) {
        this._numid = value;
    }
    //重写父类的toString()方法
    toString() {
        //调用父类的返回结果
        return `numid = ${this._numid}\t` + super.toString();
    }
}
let stu = new Student('小明', 15, '男', 'A001');
// console.log(stu.toString());
stu.numid = 'BA1001'; //私有属性的修改需要通过类内部提供的set方法
console.log(stu.numid);
