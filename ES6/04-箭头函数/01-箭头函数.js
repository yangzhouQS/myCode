//1 - 箭头函数
function f(a) {
  return a;
}

//等价于上面的
let fn = a => a;
console.log(fn(5));

function f1(a) {
  return function (b) {
    return a + b;
  };
}

//等价于上面的
let a = a => b => a + b;
console.log(a(5)(6));//11

//2  -  返回的如果是对象需要使用()包起来
let b = a => b => ({ sum : a + b });
console.log(b(5)(6));//{ sum: 11 }

//3 - 解决this问题,看.前面是谁就是谁
let obj = {
  name : "李四",
  age : 26,
  say : function () {
    // console.log(this.name);
    // console.log(this);//{ name: '李四', age: 26, say: [Function: say] }
    //this丢失
    /*return function () {
      console.log(this);//window
      return this.age;//undefined
    }*/
    return function () {
      console.log(this);//window
      return this.age;//undefined
    }.bind(this);
    // return () => this.age;//26//完美的解决,简单粗暴
    /*
    * 解决this丢失
    *   1>var _this=this;
    *   2>.bind(this); //绑定外部的this
    *   3>return () => this.age;//使用箭头函数解决this丢失
    */
  }
};
console.log(obj.say()());

console.log("-----------");
//4 - let声明的变量页不会被添加到全局
let c = 100;
let o = {
  c : 200,
  b : () => {
    // console.log(this.c);//undefined
    // console.log(this);//{}
    console.log(c);//100
  }
};
o.b();

//5 - 箭头函数的arguments丢失,
// ...  剩余运算符
let fn2 = (x, ...value) => {
  // console.log(arguments);//Identifier 'fn' has already been declared
  console.log("x = ", x);//x =  x
  console.log(value);//参数剩余
};
fn2("x", 1, 2, 3, 4, 54, 5, 65);

//6 - 默认参数,默认参数在必须参数的右边
let fn3 = (a, b = 3, ...v) => {
  console.log(a, b, v);//1 2 [ 3, 4 ]
};
fn3(1, 2, 3, 4);

console.log("rest参数");
let fn4 = (...args) => args.reduce((a, b) => a + b, 0);
console.log(fn4(1, 2, 3, 5));