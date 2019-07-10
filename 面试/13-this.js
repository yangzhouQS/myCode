function Person(name) {
  //this时构造函数的实例
  this.name = name;
  this.sayName = function () {
    //this代表当前构造函数的实例
    console.log(this.name);
  }
}

Person.prototype.getName = function () {
  console.log(this.name);
};
var p = new Person('tom');
//this看是谁调用的
p.sayName();//tom
p.getName();//tom
// var f = p.getName;
// f();//undefined ==>window.p.getName();

for (var pKey in p) {
  console.log(p[pKey]);
}
