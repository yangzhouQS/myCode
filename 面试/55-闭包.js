var a = 10, b = 11, c = 12;

function test(a) {
  a = 1;//私有的
  var b = 2;//私有的
  c = 3;//全局的
}

test(10);
console.log(a);//10
console.log(b);//11
console.log(c);//3