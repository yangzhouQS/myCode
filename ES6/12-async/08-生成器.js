/*
* 生成器:生成器是一个函数可以生成迭代器
* 输出期函数和普通的函数不一样,普通函数一旦调用执行完毕,生成器函数可以暂停
* 迭代器
* */
function* go(a) {
  //本次的输出写在yied的前面,下一次的输出写在yied的前面
  let b = yield a;
  let c = yield b;
  return c;
}

//使用生成器创建迭代器
let gos = go('迭代器创建完毕');
//迭代器是一个对象,调用next()方法就会执行一次
let a = gos.next("第二次迭代");
console.log(a);
let b = gos.next('xxxxx');
console.log(b);
let c = gos.next('aaaaaaaaa');
console.log(c);
console.log(gos.next());
