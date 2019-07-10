function* helloGenerator() {
  yield 'hello';
  yield 'word';
  return 'ending';
}

let hw = helloGenerator();//内部有两个yield表达式（hello和world），即该函数有三个状态：hello，world 和 return 语句（结束执行）。
console.log(hw.next());//{ value: 'hello', done: false }
console.log(hw.next());//{ value: 'word', done: false }
console.log(hw.next());//{ value: 'ending', done: true }
console.log(hw.next());//{ value: undefined, done: true }

//必须调用遍历器对象的next方法，使得指针移向下一个状态。
// 也就是说，每次调用next方法，内部指针就从函数头部或上一次停下来的地方开始执行，直到遇到下一个yield表达式（或return语句）为止。
// 换言之，Generator 函数是分段执行的，yield表达式是暂停执行的标记，而next方法可以恢复执行。

