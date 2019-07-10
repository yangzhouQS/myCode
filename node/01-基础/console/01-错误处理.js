console.log(1);
console.info('info');
console.warn('warn');
console.error('error');

// node  filename.js >> a.log 将错误输出到文件a.log

//计算代码的执行时间
console.time('time');
let i = 0;
while (i < 100000) {
  i++;
}
console.timeEnd('time');

/*
* 程序的健壮性多数是靠测试出来的
* 集成测试、持续集测试驱动开发 BDD成 TDD
* 行为驱动开发
* */
//断言：assert
let sum = n => n;
//为true时不会输出,为false时会输出
console.assert(sum(10) === 10, '错误啦');

//列出对象的详细结构
let obj = {name: 'xx'};
console.dir(sum);

//跟踪当前代码的调用栈
console.trace(obj);
