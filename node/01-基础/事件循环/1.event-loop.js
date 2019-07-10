console.log('脚本开始');

setTimeout(() => {
  console.log('进入setTimeout1回调函数');
}, 0);

setTimeout(() => {
  console.log('进入setTimeout2回调函数');
  Promise.resolve().then(() => {
    console.log('进入promise2回调函数');
    Promise.resolve().then(() => {
      console.log('进入promise3回调函数');
    });
    setTimeout(function () {
      console.log('进入setTimeout4回调函数')
    }, 0);
    console.log('promise2回调函数结束');
  });
  setTimeout(() => console.log('进入setTimeout3回调函数'), 0);
}, 0);

Promise.resolve().then(() => {
  console.log('进入promise1回调函数');
});

console.log('脚本结束');

/*
脚本开始
脚本结束

进入promise1回调函数

进入setTimeout1回调函数
进入setTimeout2回调函数

进入promise2回调函数

promise2回调函数结束

进入promise3回调函数
进入setTimeout3回调函数
进入setTimeout4回调函数

*/
