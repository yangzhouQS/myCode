// @ts-ignore
function foo() {
    // @ts-ignore
    return new Promise(function (reslove, reject) {
        if (Math.random() > 0.5) {
            reslove("成功吧~~~");
        }
        else {
            reject("失败吧~~~");
        }
    });
}
// @ts-ignore
foo().then(function (data) { return console.log(data); })
    .then(function (data) { return console.log(data); });
//# sourceMappingURL=17-promise.js.map