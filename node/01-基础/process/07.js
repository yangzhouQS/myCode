//异步的,在当前队列的底部
process.nextTick(function () {
  console.log('nexttrick');
  // console.log(this);//global
});
//第二个队列
setImmediate(() => {//使用箭头函数this就会为空对象
  console.log('setImmediate');
  console.log(this);//Immediate//使用箭头函数不要让this指向自己
});
setTimeout(function () {
  console.log('setTimeout');
}, 0);//有延迟
