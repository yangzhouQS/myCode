function loadImg(src) {
  return new Promise((resolve, reject) => {
    let img = document.createElement('img');
    img.onload = function () {
      resolve(img);
    }
    img.onerror = function () {
      reject('图片加载失败');
    }
    img.src = src;
  });
}

