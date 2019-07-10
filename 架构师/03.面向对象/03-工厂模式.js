/*
 * 工厂模式（Factory Pattern）
 *   1.把实现相同功能的代码进行“封装”，以此来实现“批量生产”（后期想要实现这个功能，我们只需要执行函数即可）
 *
 *   2.“低耦合高内聚”：减少页面中的冗余代码，提高代码的重复使用率
 */

function createPerson(name, age, sex) {
  var o = {};
  o.name = name;
  o.age = age;
  o.sex = sex;
  return o;
}

var lisi = createPerson('李四', 26, '男');
var daniu = createPerson('大牛', 69, '男');