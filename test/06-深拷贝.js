var obj = {
  a : 1,
  b : undefined,
  c : null,
  d : this.a
};
var a = JSON.parse(JSON.stringify(obj));
/*
* 局限性:
*   无法序列化函数
*   会忽略 undefined
*   会忽略 symbol
*   不能解决循环引用的对象
*
* */
console.log(obj, a);