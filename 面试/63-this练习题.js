var num = 10;
var obj = {num: 20};
obj.fn = (function (num) {
  // console.log(this);//全局对象
  this.num = num * 3;//60
  console.log('-', this.num);
  num++;//21
  return function (n) {//10
    // console.log(this);
    this.num += n;//65
    num++;//22
    console.log('*', num);
  };
})(obj.num);
var fn = obj.fn;
fn(5);
obj.fn(10);//23
console.log(num, obj.num);//10,30
