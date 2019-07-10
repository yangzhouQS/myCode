let obj = {
  left: 100,
  top: 200,
  name: 'box'
};
obj[Symbol.iterator] = function () {
  let keys = Object.keys(obj);
  let index = 0;//调用迭代方法时会自动来找[Symbol.iterator]
  return {
    next: function () {
      if (index < keys.length) {
        return {value: obj[keys[index++]], done: false};
      } else {
        return {value: undefined, done: true}
      }
    }
  }
};
for (const objElement of obj) {
  console.log(objElement);
}

function Person(name, age, gender) {
  this.name = name;
  this.age = age;
  this.gender = gender;
  this.say = function () {
    console.log(this.name);
  };
}

Person.prototype[Symbol.iterator] = function () {
  let keys = Object.keys(this);
  let self = this;
  let index = 0;
  return {
    next() {
      if (index < keys.length) {//可以自定义返回的值
        return {value: self[keys[index++]], done: false};
      } else {
        return {value: undefined, done: true};
      }
    }
  }
};
let p = new Person('Tom', 15, '男');
for (const person of p) {
  console.log(person);
}