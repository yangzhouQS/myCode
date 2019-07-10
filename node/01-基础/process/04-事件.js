/*
退出前执行
 */
process.on('exit', function () {
  // 设置一个延迟执行
  setTimeout(function () {
    console.log('主事件循环已停止，所以不会执行');
  }, 0);
  console.log('退出前执行');
});
setTimeout(function () {
  console.log('1');
}, 500);


//捕获到一个异常
process.on('uncaughtException', function () {
  console.log('捕获到一个异常');
});
var a = '123';
a.a(); //触发异常事件
console.log('这句话不会显示出来');


//　捕获当前进程接收到的信号（如按下了 ctrl + c）
process.on('SIGINT', function () {
  console.log('收到 SIGINT 信号。');
});
console.log('试着按下 ctrl + C');
setTimeout(function () {
  console.log('end');
}, 50000);