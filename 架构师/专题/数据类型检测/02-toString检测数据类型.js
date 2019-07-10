/*
//十三种数据类型检测
console.log(Object.prototype.toString.call(123));//[object Number]
console.log(Object.prototype.toString.call('123'));//[object String]
console.log(Object.prototype.toString.call(false));//[object Boolean]
console.log(Object.prototype.toString.call(undefined));//[object Undefined]
console.log(Object.prototype.toString.call(null));//[object Null]
console.log(Object.prototype.toString.call([]));//[object Array]
console.log(Object.prototype.toString.call({}));//[object Object]
console.log(Object.prototype.toString.call((new Date())));//[object Date]
console.log(Object.prototype.toString.call((new RegExp())));//[object RegExp]
console.log(Object.prototype.toString.call((new Error())));//[object Error]
console.log(Object.prototype.toString.call(function () {
}));//[object Function]
console.log(Object.prototype.toString.call(Math));//[object Math]
console.log(Object.prototype.toString.call(JSON));//[object JSON]
*/

function fn() {
  console.log(Object.prototype.toString.call(arguments));//[object Arguments]
}
fn();

