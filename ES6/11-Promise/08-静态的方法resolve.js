//Promise.resolve
//静态方法 Promise.resolve(value)  可以认为是  new Promise()  方法的快捷方式。
new Promise((resolve, reject) => {

  //会让这个promise对象立即进入确定（即resolved）状态，传递给后面then里所指定的  onFulfilled  函数。
  resolve('直接的成功');

  console.log('resolve');
  console.log('resolve');
  console.log('resolve');
  reject('小宇0.5');

  /*if (Math.random() > 0.5) {
    resolve('直接的成功');
  } else {
    reject('小宇0.5');
  }*/
}).then(data => {
  console.log(data);
}, reason => {

}).catch(function (error) {
  // 处理 getJSON 和 前一个回调函数运行时发生的错误
  console.log('发生错误！', error);
});