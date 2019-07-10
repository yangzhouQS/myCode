"use strict";
class Person3 {
    constructor(username, userage) {
        this.username = username;
        this.userage = userage;
    }
}
//抽象类不可以被实例化,必须继承实现
class Stu extends Person3 {
    constructor(username, userage) {
        super(username, userage);
        this.userage = userage;
    }
    getName() {
        return this.username;
    }
    say() {
        return "say";
    }
}
let stu2 = new Stu('李四', 22);
console.log(stu2.getName());
