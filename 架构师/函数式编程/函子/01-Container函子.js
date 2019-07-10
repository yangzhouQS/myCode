/**
 * Container函子的实现,不可以使用箭头函数创建,箭头函数无法使用new创建对象
 * @param val
 * @constructor
 */
const Container = function (val) {
  this.value = val;
};

let testValue = new Container('hello');
let testObj = new Container({name: "李四", age: 26});
let testArray = new Container([1, 2, 3, 4]);
console.log(testValue);
console.log(testObj);
console.log(testArray);
//比较的麻烦,为Container提供一个工具类方法
/**
 * Container的工具方法,省略new的使用
 * @param val
 * @returns {Container}
 */
Container.of = function (val) {
  return new Container(val);
};
console.log(Container.of('lisi'));
console.log(Container.of({name: "李四"}));
console.log(Container.of([1, 2, 3, 4]));
//可以嵌套使用
console.log(Container.of(Container.of({name: "李四", age: 26})));
//Container { value: Container { value: { name: '李四', age: 26 } } }

/**
 * Container原型上实现map函数
 * @param fn
 * @returns {Container}
 */
Container.prototype.map = function (fn) {
  return Container.of(fn(this.value));
};
Container.of([1, 2, 3]).map(x => {
  console.log(x);
});
console.log(Container.of([1, 2, 3, 4]).value.map(x => x * 3));

