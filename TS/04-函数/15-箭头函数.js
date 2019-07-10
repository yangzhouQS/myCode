//箭头函数
var Person = /** @class */ (function () {
    function Person(props) {
        this.name = props;
    }
    Person.prototype.greet = function () {
        console.log("\u6211\u7684\u540D\u5B57\u662F " + this.name);
    };
    Person.prototype.greetDelay = function (timer) {
        setTimeout(function () {
            console.log("\u6211\u7684\u540D\u5B57\u662F " + this.name); //this失效
        }, timer);
    };
    Person.prototype.greetDelay2 = function (timer) {
        var _this = this;
        setTimeout(function () {
            console.log("\u6211\u7684\u540D\u5B57\u662F " + _this.name); //使用箭头函数解决this'失效的问题
        }, timer);
    };
    return Person;
}());
var p = new Person("李四");
p.greet();
p.greetDelay(2000);
p.greetDelay2(1000);
//# sourceMappingURL=15-箭头函数.js.map