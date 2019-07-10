function loadImg(src, callback, fail) {
  var img = document.createElement('img');
  img.onload = function () {//成功的回调函数
    callback(img);
  }
  img.error = function () {
    fail();//失败的回调
  }
  img.src = src;
}

var src = 'http://www.baidu.com/a.jpg';
loadImg(src, function (img) {
  console.log(img);
}, function (err) {
  console.log(err);
});

