if (false) {
  var a = 100;//变量提升
  console.log('里面');
  console.log(a);
}
console.log(a);

var obj = {a: 1};
console.log('b' in obj);
if ('b' in obj) {
  var b = 100;
  console.log('里面');
}
console.log("外面:", b);


