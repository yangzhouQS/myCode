/*
* 1 - 数组解构赋值
* 注意:一一对应,可以丢弃不需要的值
* */
let arr = ["a", 1, 2, 3];
let [a, b, c, d] = arr;
console.log(a, b, c, d);
let [e, , ,] = arr;//取到需要的值,其余的可以不需要
console.log(e);//a

/*
* 2 - 对象的解构
*   解构出来的名称对应,可以重新命名
* */
{
  let obj = {
    name : "Tom",
    age : 26
  };
  // let {name, age} = obj;
  //右侧的名称顺序可以不对应
  let { name, age } = { age : 22, name : "xx" };

  console.log(name, age);

  //可以重新命名
  let { name : n, age : l } = { name : "xxx", age : 26 };
  console.log(n, l);
}

//3 - 字符串的解构
let str = "java";
let [s, t, r] = str;
console.log(s, t, r);


//4  -set解构
let set = new Set([1, 2, 3]);
let [s1, s2, s3] = set;
console.log(s1, s2, s3);//1 2 3


// 默认值 ->解构赋值允许指定默认值。
let [a1, a2 = 123] = [1];
console.log(a1, a2);//1 123

var arr2 = [];
for (let i = 0, len = 5; i < len; i++) {
  arr2[i] = function () {
    console.log("i = ", i);
  };
}
arr2[3]();