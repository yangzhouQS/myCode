var a = 12;
/*
 * 1.先声明一个变量a，没有赋值（默认值是undefined）
 * 2.在当前作用域中开辟一个位置存储12这个值
 * 3.让变量a和12关联在一起（定义：赋值）
 */
var b = a;
b = 13;
console.log(a);

var ary = [12, 23];
var ary2 = ary;
ary2.push(100);
console.log(ary2); //[ 12, 23, 100 ]

/**
 * 求和函数
 */
function sum() {
  var total = null;
  for (var i = 0; i < arguments.length; i++) {
    console.log(isNaN(arguments[i]));
    if (!isNaN(arguments[i])) {//判断数据类型是否为数字
      total += parseFloat(arguments[i]);
    }
  }
  console.log('total = ', total);
  return total;
}

sum(1, 2, '3', 'a');
console.log(parseFloat('a'));//NaN
console.log(isNaN(NaN));//true