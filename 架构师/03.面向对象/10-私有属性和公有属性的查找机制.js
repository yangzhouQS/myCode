function fun() {
  this.a = 0;
  this.b = function () {
    alert(this.a);
  }
}

fun.prototype = {
  b: function () {
    this.a = 20;
    alert(this.a);
  },
  c: function () {
    this.a = 30;
    alert(this.a)
  }
};
//调用属性方法的时候,现在自己的私有属性中查找,找不到的时候沿着作用域链向上查找
var my_fun = new fun();
my_fun.b();
my_fun.c();