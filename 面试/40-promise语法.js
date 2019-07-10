function loadImg(src) {
  return new Promise((resolve, reject) => {
    let img = document.createElement('img');
    img.onload = function () {
      resolve(img);
    }
    img.onerror = function () {
      reject();
    }
    img.src = src;
  });
}

//调用此方法返回的是promise对象,调用then方法,返回的是promise对象
loadImg('').then(data => {
  console.log(data);
}).catch(error => {
  console.log(error);
});
