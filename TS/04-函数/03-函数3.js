function great(name) {
    if (name) {
        return 'hello ' + name;
    }
    else {
        return 'hello';
    }
}
console.log(great());
console.log(great("word"));
//匿名函数
var great2 = function (name) {
    if (name) {
        return 'hello ' + name;
    }
    else {
        return 'hello';
    }
};
//指定返回值类型
/**
 * 指定返回值类型为字符串
 * @param name
 */
//箭头函数
var greet3 = function (name) {
    if (name) {
        return 'hello ' + name;
    }
    else {
        return 'hello';
    }
};
var gree4 = function (name) {
    if (name) {
        return 'hello ' + name;
    }
    else {
        return 'hello';
    }
};
//回调函数
function sum(a, b, callback) {
    callback(a + b);
}
//# sourceMappingURL=03-函数3.js.map