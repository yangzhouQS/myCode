/*
JSON.stringify(value[, replacer [, space]])


value
将要序列化成 一个JSON 字符串的值。

replacer 可选
如果该参数是一个函数，则在序列化过程中，被序列化的值的每个属性都会经过该函数的转换和处理；如果该参数是一个数组，则只有包含在这个数组中的属性名才会被序列化到最终的 JSON 字符串中；如果该参数为null或者未提供，则对象所有的属性都会被序列化；关于该参数更详细的解释和示例，请参考使用原生的 JSON 对象一文。

space 可选
指定缩进用的空白字符串，用于美化输出（pretty-print）；如果参数是个数字，它代表有多少的空格；上限为10。该值若小于1，则意味着没有空格；如果该参数为字符串(字符串的前十个字母)，该字符串将被作为空格；如果该参数没有提供（或者为null）将没有空格。
*/
console.log(JSON.stringify({}));//{}
console.log(JSON.stringify(true));//true
console.log(JSON.stringify(false));//false
console.log(JSON.stringify(123456));//
console.log(JSON.stringify('false'));//'false'
console.log(JSON.stringify([]));//[]
console.log(JSON.stringify([1, 2, 3]));
[1, 2, 3]
console.log(JSON.stringify({}));//{}
console.log(JSON.stringify({name: '李四', age: 26}));//{"name":"李四","age":26}

console.log(JSON.stringify(
  {[Symbol.for("foo")]: "foo"},
  function (k, v) {
    if (typeof k === "symbol") {
      return "a symbol";
    }
  }
));


let obj = {
  name: '李四',
  age: 26,
  gender: '男',
  address: '南京'
};
console.log('---------');
console.log(JSON.stringify(obj, function (k, v) {
  if (typeof v === 'number') {//如果为数字类型,直接跳过
    return undefined;
  }
  return v;
}));//{"name":"李四","gender":"男","address":"南京"}

//指定序列化的项
console.log(JSON.stringify(obj, ['name', 'age']));
//{"name":"李四","age":26}


//sapce参数
console.log(JSON.stringify(obj, null, 4));
console.log(JSON.stringify(obj, null, 10));




