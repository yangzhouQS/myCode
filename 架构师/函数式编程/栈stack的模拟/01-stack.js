/*
*
* 栈是一种遵从后进先出（LIFO）原则的有序集合。新添加的或待删除的元素都保存在栈的同一端，称作栈顶，另一端就叫栈底。在栈里，新元素都靠近栈顶，旧元素都接近栈底。
* */

//创建栈
function Stack() {
  //使用数组保存栈里面的数据结构
  var items = [];
  /*
  * push()在栈顶部添加几个或者一个元素
  * pop()弹栈,移除顶部的元素
  * peek()返回栈顶部的元素
  * isEmpty()检测栈是否为空
  * clear()移除栈里面的索引元素
  * size()返回栈里的元素个数
  * */

  //push()添加元素
  this.push = function () {
    var args = [].slice.call(arguments);
    for (var i = 0, len = args.length; i < len; i++) {
      items.push(args[i]);
    }
  };
  //pop()移除元素
  this.pop = function () {
    return items.pop();
  };
  //查看栈顶部的元素
  this.peek = function () {
    return items[items.length - 1];
  };
  //检测栈是否为空
  this.isEmpty = function () {
    return items.length === 0;
  };
  //返回栈的长度
  this.size = function () {
    return items.length;
  };
  //清空栈
  this.clear = function () {
    items = [];
  };
  //辅助打印栈的方法
  this.print = function () {
    items.length ? console.log(items.toString()) : console.log([]);
    // console.log(items.toString());
  };
}

let stack = new Stack();
stack.push(1, 2, 3);
console.log(stack.pop());//3
console.log(stack.peek());
console.log(stack.size());
console.log(stack.isEmpty());
stack.clear();
stack.print();
