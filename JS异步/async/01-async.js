const demo01Async = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("世界你好呀!");
    }, 1000);
  })
};
// 当你想要 调用 这个函数时，你在前面加上 await ，并且 调用代码将停止，直到 promise 被resolved 或者 rejected 。一个警告：调用函数必须定义为 async 。这里有一个例子：
demo01Async().then(data => {
  console.log(data);
})