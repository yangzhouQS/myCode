function f2() {
  return 'a'
}

//1 - 等价于下面的写法
let f3 = () => {
  return 'a';
};
//2 - 等价于下面的
let f4 = () => 'a';

//3 - 形参只有一个时可以省略括号
let f5 = x => x + 10;
console.log(f5(100));

//4 - 两个及其以上的参数时就不可以省略括号
let f6 = (x, y) => {
  return x + y;
};
console.log(f6(1, 5));

//5 - 返回的是一个对象时需要使用括号包起来
let f7 = (x, y) => ({x: x, y: y});
console.log(f7(5, 'abc'));
//{ x: 5, y: 'abc' }

//6 - 返回只有一条处理的表达式时可以省略大括号
let g8 = x => x;
console.log(g8(10));