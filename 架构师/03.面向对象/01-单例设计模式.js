/*
let name = '蔺相如';
let age = 55;
let gender = '男';
//各个变量之间毫无关系
//使用对象来保存变量之间无法描述的关系,当所维护的变量过多的时候混乱不堪,对象的引入
let person = {name: '蔺相如', age: 55, gender: '男'};
*/

/*
 * 单例设计模式（singleton pattern）
 *  1.表现形式
 *  var obj = {
 *      xxx:xxx,
 *      ...
 *  };
 *  在单例设计模型中,OBJ不仅仅是对象名,它被称为“命名空间[NameSpace]”，把描述事务的属性存放到命名空间中，多个命名空间是独立分开的，互不冲突
 *
 *  2.作用
 *  =>把描述同一件事务的属性和特征进行“分组、归类”(存储在同一个堆内存空间中)，因此避免了全局变量之间的冲突和污染
 *  var pattern1={name:'xxx'}
 *  var pattern2={name:'xxx'}
 *
 *  3.单例设计模式命名的由来
 *  =>每一个命名空间都是JS中Object这个内置基类的实例，而实例之间是相互独立互不干扰的，所以我们称它为“单例：单独的实例”
 */


/*
* 高级的单例模式
*   1.在给命名空间赋值的时候，不是直接赋值一个对象，而是先执行匿名函数，形成一个私有作用域AA（不销毁的栈内存），在AA中创建一个堆内存，把堆内存地址赋值给命名空间
*   2.这种模式的好处：我们完全可以在AA中创造很多内容（变量OR函数），哪些需要供外面调取使用的，我们暴露到返回的对象中（模块化实现的一种思想）
* */

let namespace = function () {
  function getName(func) {
    return func.name;
  }

  function sum(a, b) {
    return a + b;
  }

  return {//把需要暴露的函数变量暴露出去
    getName: getName,
    sum: sum,
  }
}();
/*function fn(){//=>AAAFFF000
  console.log(1);
}
var obj={
  fn:fn //=>fn:AAAFFF000
};

//=>执行的是相同的方法（不同地方在于函数执行方法中的this是不一样的）
obj.fn();//=>this:obj
fn();//=>this:window

//=>自执行函数执行，方法中的this是window
~function(){
  //=>this:window
}();*/


var n = 2;
var obj = {
  n: 3,
  fn: (function (n) {
    n *= 2;//6
    this.n += 2;//
    var n = 5;
    return function (m) {
      this.n *= 2; //==>
      console.log(m + (++n));//
    }
  })(n)//=>obj.n会报错
};
var fn = obj.fn;
fn(3);//9
obj.fn(3);//10
console.log(n, obj.n);//8 6
// 浏览器环境和node环境运行的结果不一样