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
///<reference path="03-继承2.ts"/>
// @ts-ignore
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.money = 100;
        this.name = name;
    }
    Animal.prototype.say = function (dis) {
        if (dis === void 0) { dis = 4; }
        console.log("\u52A8\u7269\u6709" + dis + "\u6761\u817F");
    };
    return Animal;
}());
// @ts-ignore
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name) {
        // @ts-ignore
        return _super.call(this, name) || this;
    }
    Dog.prototype.print = function () {
        // console.log(this.money);
        console.log(this.name);
    };
    Dog.prototype.name = function (name) {
        throw new Error("Method not implemented.");
    };
    return Dog;
}(Animal));
var d;
// @ts-ignore
d = new Dog("小黑");
console.log(d);
// @ts-ignore
d.print();
