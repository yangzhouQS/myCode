console.log("console.log");//标准输出流
console.info("console.info");//提示信息的食醋胡
console.warn("warn");//警告信息
console.error("error");//错误信息输出
console.dir("对象详细信息打印");
let obj = { name : "xainjs", age : 26 };
console.dir(obj);

//统计代码执行时间
console.time("t1");
for (let i = 0, len = 1000; i < len; i++) {

}
console.timeEnd("t1");
console.trace('trace');//输出当前的位置栈信息
