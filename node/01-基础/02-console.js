console.log('log');
console.info("info");
console.warn("warn");
console.error("error");

//程序运行的测试
console.time("tim");
for (let i = 0; i < 100000; i++) {
}
console.timeEnd('tim');//tim: 3.067ms

/*
* 测试:单元测试,集成测试,持续测试 TDD 测试驱动开发 BDD行为驱动开发
* CMMI5级:CMMI全称是Capability Maturity Model Integration，是能力成熟度集成模型，是由美国国防部与卡内基-梅隆大学和美国国防工业协会共同开发和研制的。CMMI是一套融合多学科的、可扩充的产品集合，其研制的初步动机是为了利用两个或多个单一学科的模型实现一个组织的集成化过程改进。
*
* */

function sum(a, b) {
  // return a + b + 3;
  return a + b;
}

//断言:单元测试,错误时提示,正确时不提示
console.assert(sum(1, 2) === 3, "错误啦");
let obj = {name: "xianjs", age: 26, fir: {xx: 55}};
console.log(obj);
console.dir(obj);

//跟踪当前代码的调用栈
// console.trace(obj);

let a=100;
let b=20;
console.log(a+b);



console.log('cdscsd');
