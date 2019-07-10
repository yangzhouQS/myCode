//Promise API 公开了一个 Promise 构造函数，你可以使用 new Promise() 进行初始化：
let done = true;
const isDoneYet = new Promise((resolve, reject) => {
  if (done) {
    const str = "我要好好学习MVVM框架的原理";
    resolve(str);
  } else {
    const myStr = "搭建自己的学习平台";
    reject(myStr);
  }
});

//使用Promise
isDoneYet.then(data => {
  console.log(data);
}).catch(e => {
  console.log(e.message);
});
//执行 isDoneYet() promise 并使用 then 回调等待该 promise 的 resolve 状态。如果有错误，它将在 catch 回调中处理这个错误。