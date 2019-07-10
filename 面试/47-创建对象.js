//1.工厂模式创建对象
function createPerson(name, age) {
  let o = new Object();
  o.name = name;
  o.age = age;
  return o;
}

/*
let p1 = createPerson('tom', 23);
let p2 = createPerson('jack', 23);
console.log(p1.constructor == p2.constructor);
//缺点:但却没有解决对象识别的问题（即怎样知道一个对象的类型）*/

//2.构造函数模式
function CreatePerson2(name, age) {
  this.name = name;
  this.age = age;
  this.getName = getName;

  /*
  * 防止没创建一次实例,都会创建一个函数
  * */
  function getName() {
    return this.name;
  }

  /*
(1) 创建一个新对象； 
(2) 将构造函数的作用域赋给新对象（因此 this 就指向了这个新对象）； 
(3) 执行构造函数中的代码（为这个新对象添加属性）； 
(4) 返回新对象。 
  */
}

/*let p = new CreatePerson2('jack', 26);
let p2 = new CreatePerson2('tom', 22);
console.log(p.getName());
console.log(p.constructor === CreatePerson2);//true
console.log(p instanceof CreatePerson2);//true*/
/*
没有显式地创建对象；
直接将属性和方法赋给了 this 对象；
没有 return 语句。 */

//3.原型模式创建对象
function Person() {
}

Person.prototype.name = '李四';
Person.prototype.age = '26岁';
Person.prototype.getName = function () {
  console.log(this.name);
};


















