function Stack() {
  /*
  push(element(s))：添加一个（或几个）新元素到栈顶。
  pop()：移除栈顶的元素，同时返回被移除的元素。
  peek()：返回栈顶的元素，不对栈做任何修改（这个方法不会移除栈顶的元素，仅仅返回它）。
  isEmpty()：如果栈里没有任何元素就返回true，否则返回false。
  clear()：移除栈里的所有元素。
  size()：返回栈里的元素个数。这个方法和数组的length属性很类似。
  toString():将栈内容以字符串返回
  */
  this.items = [];
  this.push = function (val) {
    this.items.push(val);
  };
  //移出的是最后添加进去的元素
  this.pop = function () {
    return this.items.pop();
  };
  //返回栈最后添加进去的数据
  this.peek = function () {
    return this.items[this.items.length - 1];
  };
  //如果栈为空的话将返回true，否则就返回false：
  this.isEmpty = function () {
    return this.length === 0;
  };
  //返回栈的大小
  this.size = function () {
    return this.items.length;
  };
  this.clear = function () {
    this.items = [];
  };
  this.toString = function () {
    return this.items.join(',');
  };
}

/*
let s = new Stack();
s.push('xianjs');
s.push('beijing');
console.log(s.peek());
console.log(s.size());//栈的大小
console.log(s.isEmpty());//判断栈是否为空
// s.clear();
// console.log(s.size());
console.log(s.toString());*/

function dec2bin(number) {
  let s = new Stack();//存储每次结果
  while (number > 0) {
    s.push(number % 2);
    number = Math.floor(number / 2);
    console.log(number);
  }
  console.log('4332');
  //从栈获取结果
  let binaryString = '';
  while (!s.isEmpty()) {
    binaryString += s.pop();
  }
  console.log('binaryString');
  return binaryString;
}

console.log(dec2bin(100));
console.log('------');
