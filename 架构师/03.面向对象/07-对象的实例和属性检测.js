var Fn = (function () {
  return function (name, age) {
    this.name = name;
    this.age = age;
  };
})();
var f = new Fn('李四', 26);
console.log(f);
/*
* instanceof:检测一个实例是否属于指定的类
* */

console.log(f instanceof Fn);//true
console.log(f instanceof Array);//false
console.log(f instanceof Object);//true
// 万物皆对象：所有的对象，包含创建的实例都是Object的实例

/*
* in:检测一个对象是否有指定的属性
*   （不管当前这个属性是对象的私有属性还是公有属性，只要有结果就是TRUE）
* */
console.log('name' in f);//存在的属性返回的是true
console.log('toString' in f);//公有的属性也返回的true
console.log('xxx' in f);//false
console.log(Object.keys(f));//获取对象所有的键

/*
* hasOwnProperty：检测当前属性是否为对象的私有属性（不仅要有这个属性，而且必须还是私有的才可以）
* */
console.log(f.hasOwnProperty('name'));//true
console.log(f.hasOwnProperty('toString'));//false

/*
* 创建对象公有属性检测:hasPubProperty
* */

//思考:实现公有属性的判断
function hasPubProperty(obj, attr) {
  //首先保证是一个属性,并且不是私有的属性,那么只能是公有的属性
  return (attr in obj) && !obj.hasOwnProperty(attr);
}

console.log(hasPubProperty(f, 'name'));//false//不是公有的属性
console.log(hasPubProperty(f, 'toString'));//toString ==>true是私有的方法