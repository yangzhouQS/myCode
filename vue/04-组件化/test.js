/*
const http = require('http');
console.log(http.METHODS);

var test = (function (a) {
    this.a = a;
    return function (b) {
      return this.a + b;
    }
  }
  (function (a, b) {
    return a;
  }(1, 2))
);
console.log(test(4));
*/
let obj = {name: 'x'};
let arr = [1, 2, 3, 4, 5];
arr.forEach((v, i, array) => {
  console.log(v, i, array, this);
}, obj);


