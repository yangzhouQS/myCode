const stsatus = (response) => {
  if (response.status >= 200 && response.status < 300) {
    return Promise.resolve(response);
  } else {
    return Promise.reject(new Error(response.statusText));
  }
}
// const json = (response) => response.join();
fetch('./user.json')/*.then(status)*/.then(json).then((data) => {
  console.log("返回的数据", data);
}).catch((error) => {
  console.log('请求错误', error);
})