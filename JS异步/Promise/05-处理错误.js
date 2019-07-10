//处理错误
new Promise((resolve, reject) => {
  throw new Error('出现错误啦...')
}).catch(e => {
  console.log(e.message);
  // console.log(e);
});
new Promise((resolve, reject) => {
  reject("我也失败啦...");//直接失败
}).catch(e => {
  console.log(e);
});

new Promise((resolve, reject) => {
  if (Math.random() > 0.5) {//由等待的状态转换为成功状态
    resolve("哈哈");
  } else {//转换为失败态
    reject("嘻嘻");
  }
}).then(data => {
  console.log('成功态:', data);
}, error => {
  console.log('失败态:', error);
});
