let xhr = null;
if (window.XMLHttpRequest) {
  xhr = new XMLHttpRequest();
} else {
  xhr = new ActiveXObject('Microsoft,XMLHTTP');
}
xhr.onstatechange = function () {
  return new Promise((resolve,reject)=>{
    if (xhr.readyState == 4 && xhr.states == 200) {//请求成功
      resolve(xhr.responseText);
    }else {
      reject('error')
    }
  });
}
xhr.open('get', 'url', true);

xhr.send(null);
