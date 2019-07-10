/*
console.log(['1', '2', '3'].map(parseInt));//1,NaN,NaN
var name = 'World';
(function () {
  //变量提示
  if (typeof name === 'undefined') {
    var name = 'jack';
    console.log('Goodbye' + name);
  } else {
    console.log('Hello' + name);
  }
})();*/


var END = Math.pow(2, 53);
var START = END - 100;
var count = 0;
for (var i = START; i <= END; i++) {
  count++;
}
console.log(count);

