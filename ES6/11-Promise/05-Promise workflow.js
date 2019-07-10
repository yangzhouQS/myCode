function asyncFunction() {
  //1 - new  Promise构造器之后，会返回一个promise对象
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log('hello word');
    }, 1000);
  });
}

//2 - 为promise对象用设置.then调用返回值时的回调函数。
//3  -调用它的then  方法来设置resolve后的回调函数，catch方法来设置发生错误时的回调函数。
asyncFunction().then(value => {
  console.log(value);
  //setTimeout 在1s之后被resolve,并且then回调输出'hello word'
  //出现错误时执行的是catch
}).catch(error => {
  console.log(error);
});

//不适用then()中的catch可以使用then()的第二个参数
asyncFunction().then(data => {
  console.log(data);
}, error => {
  console.log(error);
});