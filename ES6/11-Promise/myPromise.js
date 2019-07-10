//https://www.jianshu.com/p/b4f0425b22a1

function MyPromise(executor) {//fn为实例化的时候传递的匿名函数 , fn接受两个参数
  var self = this;
  this.status = "pending";//当前的状态// pending=>等待 resolve=>成功 reject=>失败
  this.data = undefined;//promise的值
  self.onResolvedCallback = [];//成功的回调函数集
  function resolve(value) {
    this.states = "resolved";
    this.data = value;
    for (var i = 0; i < self.onResolvedCallback.length; i++) {
      self.onResolvedCallback[i](value);
    }
  }
}

function test() {
  return new MyPromise((resolve, reject) => {

  });
}

test().then((resolve, reject) => {
  console.log("reject");
});

function xs() {
  return new Promise((resolve, reject) => {
    if (Math.random() > .5) {
      resolve("random > 0.5");
    } else {
      reject("random < 0.5");
    }
  });
}

xs().then(res => {
  console.log(res);
}, reason => {
  console.log(reason);
});