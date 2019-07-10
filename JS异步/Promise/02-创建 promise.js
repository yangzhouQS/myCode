//Promise API 公开了一个 Promise 构造函数，你可以使用 new Promise() 进行初始化：
let done = true;
const isDoneyet = new Promise((resolve, reject) => {
  if (done) {
    const str = "我要好好学习MVVM框架的原理";
    resolve(str);
  } else {
    const myStr = "搭建自己的学习平台";
    reject(myStr);
  }
});
