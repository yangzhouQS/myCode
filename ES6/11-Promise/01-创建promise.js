//node的promise是事件环
//excutor执行器,默认new时就会调用
//promise的参数只有一个
/*
* promise失败了就会执行失败态,
* promise不需要传递回调函数
*
* */
let p = new Promise((resolve, reject) => {
  //promise中的excutor是同步执行的
  setTimeout(() => {
    let t = Math.random();
    console.log(t);
    if (t > .4) {
      resolve('买吧!');
    } else {
      reject('不买了,下次买好的..');
    }
  }, 2000);
});
//promise中有两个then方法,成功和失败的方法
//then方法是异步调用的
p.then((value) => {//value成功的原因
  console.log(value);
}), (err) => {//失败的原因
  console.log(err);
};



