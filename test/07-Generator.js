function* foo(x) {
  let y = 2 * (yield (x + 1));
  let z = yield (y / 3);
  return (x + y + z);
}

let it = foo(5);
console.log(it.next());   // => {value: 6, done: false}
console.log(it.next(12)); // => {value: 8, done: false}
console.log(it.next(13)); // => {value: 42, done: true}

function Person() {
  this.name = "xxx";
}

var p = new Person();
Person.prototype.name = "李四";
Person.prototype = {
  constructor : Person,
  name : "问问"
};
console.log(p.name);
