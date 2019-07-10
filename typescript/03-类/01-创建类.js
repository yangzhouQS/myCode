"use strict";
class User {
    //构造函数
    constructor(username, userage, money, count) {
        this.username = username;
        this.userage = userage;
        this.money = money;
        this.count = count;
    }
}
//创建User类的实例
let p = new User('李四', 20, 666, 10);
//通过实例访问私有的属性和受保护的属性时不可以的
// console.log(p.username, p.userage, p.money);
console.log(p.username, p.userage);
