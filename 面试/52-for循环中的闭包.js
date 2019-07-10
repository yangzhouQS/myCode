/*for (var i = 0, len = 5; i < len; i++) {
  setTimeout(function () {
    console.log(i);
  });
}*/
for (var i = 0, len = 5; i < len; i++) {
  (function (i) {
    setTimeout(function () {
      console.log(i);
    });
  })(i);
}