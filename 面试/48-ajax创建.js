let xhr = null;
if (window.XMLHttpRequest) {
  xhr = new XMLHttpRequest();
} else {
  if (window.ActiveXObject) {//IE浏览器创建对象
    try {
      xhr = new ActiveXObject('Microsoft.XMLHTTP');
    } catch (e) {
      try {
        xhr = new ActiveXObject('msxml2.XMLHTTP');
      } catch (e) {
        console.log('还有别的创建的方式');
      }
    }
  }
}
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status == 200) {
    console.log(xhr.responseText);
  }
};
xhr.onerror = function (error) {
  console.log(error);
};
xhr.send(null);