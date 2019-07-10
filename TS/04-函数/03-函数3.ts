function great(name?: string) {
    if (name) {
        return 'hello ' + name;
    } else {
        return 'hello'
    }
}

console.log(great());
console.log(great("word"));
//匿名函数
let great2 = function (name?: string) {
    if (name) {
        return 'hello ' + name;
    } else {
        return 'hello'
    }
};
//指定返回值类型
/**
 * 指定返回值类型为字符串
 * @param name
 */
//箭头函数
let greet3 = (name?: string): string => {
    if (name) {
        return 'hello ' + name;
    } else {
        return 'hello'
    }
};
let gree4: (name: string) => string = function (name?: string) {
    if (name) {
        return 'hello ' + name;
    } else {
        return 'hello'
    }
};

//回调函数
function sum(a: number, b: number, callback: (result: number) => void) {
    callback(a + b);
}
