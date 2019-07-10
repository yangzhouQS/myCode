if (true) {
  var a = 100;
}
console.log(a);//undefined
console.log('--------');
let o = {};
// console.log('a' in o);//属性检测//false
if (!('a' in o)) {
  var b = 100;
  console.log(b);
}
// console.log(b)
