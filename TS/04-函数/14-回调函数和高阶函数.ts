//回调函数和高阶函数

let foo = function () {//回调函数
    console.log("foo");
};

// @ts-ignore
function bar(cb: () => void) {
    console.log("bar");
    cb();
}

// @ts-ignore
bar(foo);
