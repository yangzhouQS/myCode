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
// 继承
var Animal = /** @class */ (function () {
    function Animal() {
    }
    /**
     * 动物的move方法
     * @param num 默认num为4
     */
    Animal.prototype.move = function (num) {
        if (num === void 0) { num = 4; }
        console.log("\u52A8\u7269\u6709" + num + "\u6761\u817F");
    };
    return Animal;
}());
/**
 * Dog类继承Animal类
 */
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.bark = function () {
        console.log('Woof! Woof!');
    };
    return Dog;
}(Animal));
var dog = new Dog();
dog.move();
dog.bark();
