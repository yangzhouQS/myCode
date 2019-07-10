var foo = 'hello';
(function (foo) {
  //变量的提升: var foo;
  //foo=foo;//当foo不传递参数为undefined的时候,使用默认的值word
  console.log(foo);//直接打印形参
  var foo = foo || 'word';//私有变量
  console.log(foo);
})(foo);
console.log(foo);
console.log(0 && false);//0