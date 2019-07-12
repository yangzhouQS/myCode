/**
 * 普通对象只可以描述一个对象
 * @type {{getName: (function(): string), sex: string, name: string, age: number}}
 */
let person = {
  name : '李四',
  age : 26,
  sex : '男',
  getName : function () {
    return this.name;
  },
};

/**
 * 工厂模式创建对象
 * @param name
 * @param age
 * @param sex
 */
function createPerson(name, age, sex) {
  let obj = {};
  obj.name = name;
  obj.age = age;
  obj.sex = sex;
  return obj;
}


/**
 * 面向对象的编程方式
 * @param name
 * @param age
 * @param sex
 * @returns {CreatePerson}
 * @constructor
 */
function CreatePerson(name, age, sex) {
  this.name = name;
  this.age = age;
  this.sex = sex;
  this.getInfo = function () {
    return `${this.name} - ${this.age} - ${this.sex}`;
  };
  this.get = (val) => {
    if (typeof this[val] !== 'undefined') {
      return this[val];
    } else {
      throw new Error('访问属性不存在');
    }
  };
  this.set = (attr, val) => {
    if (attr == 'name') {
      throw new Error('此属性禁止修改');
    }
    if (this[attr] != undefined) {
      this[attr] = val;
    } else {
      throw new Error('设置属性失败');
    }
  };
  return this;
}

CreatePerson.prototype.getName = function () {
  return this.name;
};

let p1 = new CreatePerson('李四', 26, '男');
console.log(p1.get('name'));
p1.set('age', 26);
console.log(p1.get('age'));
