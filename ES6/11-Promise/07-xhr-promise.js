function getURL(URL) {
  return new Promise((resolve, reject) => {
    let req = new XMLHttpRequest();
    req.open("GET", URL, true);
    req.onload = function () {
      if (req.status === 200) {
        //成功的响应
        resolve(req.responseText);
      } else {
        //错误处理
        reject(new Error(req.statusText));
      }
    };
    req.onerror = function () {
      reject(new Error(req.statusText));
    };
    req.send();//发送指定的数据
  })
}

let url = 'http://httpbin.org/status/500';
getURL(url).then(data => {
  console.log(data);
}, error => {
  console.log(error);
});