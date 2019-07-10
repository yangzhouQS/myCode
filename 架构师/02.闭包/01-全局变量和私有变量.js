//全局变量和私有变量
/*
 * 变量提升：
 *    var a;  var b;  var c;
 *    fn = xxx...
 */
var a = 12, b = 13, c = 14;

function fn(a) {
  /*
     * 形参赋值
     *   a = 12
     *
     * 变量提升
     *   var b;
     *
     * =>在私有作用域中，只有以下两种情况是私有变量
     *  A:声明过的变量(带VAR/FUNCTION)
     *  B:形参也是私有变量
     *
     *  剩下的都不是自己私有的变量，都需要基于作用域链的机制向上查找
     */
  console.log(a, b, c);//12 undefined 14 (c是全局的变量)
  var b = c = a = 20;
  console.log(a, b, c);//20,20,20 //就近输出
}

fn(a)//实参传递
//a,b使用全局的变量,c使用函数内部定义的全局c
console.log(a, b, c);//12,13,20

