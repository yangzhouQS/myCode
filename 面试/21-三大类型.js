//三大类型

//1.创建数组
let arr = new Array(3);//长度为3//[ <3 empty items> ]
arr = new Array(1, 2);//[ 1, 2 ]
arr = [1, 2, 3];//[1,2,3]

//2.创建对象
//2.1对象字面变量创建对象
let person = {name: 'xxx'};
//2.2 对象的构造函数创建对象
person = new Object();
person.name = 'xx';
person['age'] = 26;
//{ name: 'xx', age: 26 }
person.getName = function () {
  //this为当前的对象
  console.log(this);
  console.log(this.age);//26
};
// person.getName();
//2.3嵌套的字面变量
let o = {
  name: 'angular',
  age: 31,
  action: function () {
    console.log(this);//关键看此方法如何调用
  }
};
// o.action();//当前对象调用此方法的时候,this就是当前的对象
// let action = o.action;
// action();//this变化啦,指向的不是当前的对象

//3工厂函数
function createProduct(productname, price) {
  let product = new Object();
  product.productname = productname;
  product.price = price;
  product.getPrice = function () {
    //this为当前的product
    return this.price;
  }
  return product;
}

// let xiaomi = createProduct('小米手机', 699.99);
// console.log(xiaomi.getPrice());
// console.log(xiaomi.constructor);//[Function: Object]
//工厂函数的构造器全部是Object,不太好


//4.构造函数
function createPerson(user, age, sex) {
  this.username = user;
  this.age = age;
  this.sex = sex;
  this.getName = function () {
    return this.username;
  };
  this.getSex = function () {
    return this.sex;
  };
}

let p = new createPerson('李四', 26);
console.log(p.getName());
console.log(p.constructor);//[Function: createPerson]
//构造函数的构造器就为当前的构造函数