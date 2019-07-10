function makeIterator(array) {
  let l = array.length;
  let index = 0;
  return {//1 - 返回一个对象
    next: function () {//2 - 对象中有一个next方法
      //3 - next方法返回一个对象,包含value属性和done属性
      //done用来记录是否遍历结束
      if (index < l) {//表示遍历还没有结束
        return {value: array[index++], done: false};
      } else {
        //true表示遍历结束
        return {value: undefined, done: true};
      }
    }
  };
}

let it = makeIterator(['a', 'b', 'c', 'd']);
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());//遍历结束

