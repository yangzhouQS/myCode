//1 - 常规的创建对象
function Person(name, gender) {
  this.name = name;
  this.gender = gender;
}

let p = new Person('小米', '男');
console.log(p.gender);
p.gender = '未知';
console.log(p.gender);//我们是不期望修改的


//2 - 使用闭包进行数据的保护
let Person2 = (function () {
  let gender = '';//保护数据,私有化

  function p(name, genders) {
    this.name = name;
    gender = genders;
  };
  p.prototype.getGender = function () {
    return gender;
  };
  return p;
})();
let p1 = new Person2('李白', '男');
console.log(p1);//p { name: '李白' }
console.log(p1.gender);//undefined无法直接的访问
console.log(p1.getGender());//男

//3 - Symbol保护数据
let Person3 = (function () {
  let _gender = Symbol('gender');

  function p(name, gender) {
    this.name = name;
    this[_gender] = gender;
  }

  //对外提供访问gender的接口方法
  p.prototype.getGender = function () {
    console.log(this[_gender]);
  };
  return p;
})();
let p2 = new Person3('李四', '男');
console.log(p2);
p2.getGender();