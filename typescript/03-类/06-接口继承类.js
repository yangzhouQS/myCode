"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 当接口继承了一个类类型时，它会继承类的成员但不包括其实现。
// 就好像接口声明了所有类中存在的成员，但并没有提供具体实现一样。
// 接口同样会继承到类的private和protected成员。
// 这意味着当你创建了一个接口继承了一个拥有私有或受保护的成员的类时，这个接口类型只能被这个类或其子类所实现（implement）。
require("./05-\u7C7B\u5B9E\u73B0\u63A5\u53E3");
class A {
    constructor(names) {
        this.names = names;
    }
    getName() {
        console.log(this.names);
    }
}
//类实现多接口
// @ts-ignore
class C {
    toString() {
        throw new Error("Method not implemented.");
    }
    constructor(age, gender, name, names, userage, username) {
        this.age = age;
        this.gender = gender;
        this.name = name;
        this.names = names;
        this.userage = userage;
        this.username = username;
    }
    getName() {
        console.log(this.name);
    }
    say() {
        console.log('say');
    }
}
