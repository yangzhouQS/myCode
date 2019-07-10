new Promise((resolve, reject) => {
  /*
  * resolve, reject:成功和失败的两种状态
  * excutor函数(执行函数):中可以不管控异步操作
  * */
  resolve(1000);
}).then(result => {
  /*
  * resolve执行的时候回触发第一个回调函数
  */
  console.log(result);
}, error => {
  /*
  * reject执行的时候第二个回调函数会触发
  */
  console.log(error);
}).then(result => {
  /*
  * 继续then()调用下去,保证then方法返回的是promise实例,就可以继续then进行链式调用下去
  * 上一个then中管控的两个方法只要任何一个执行的方法不会报错,都会执行这个then方中的第一个方法,如果执行报错,会执行此then中的第二个回调函数
  */

}).catch(reason => {
  /*
  * catch相当于then(null,reason)=>{}
  */
  console.log(reason);
});
/*
* 等待所以的promise都执行成功会执行then
*/
// Promise.all(promise1.....).then()
