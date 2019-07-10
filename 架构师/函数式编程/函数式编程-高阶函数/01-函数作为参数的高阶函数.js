let _ = require("./underscore");
//max的函数，用来找到一个列表或数组中的最大值（通常是一个数字）。事实上，Underscore本身也有这样的函数
console.log(_.max([1, 2, 3]));
let people = [{name: 'lisi', age: 26}, {name: "tom", age: 33}, {name: "xiaobai", age: 28}];
/*
* ax接受第二个参数
* 第二个参数是用来从被比较对象中获得一个数值的函数
* */
console.log(_.max(people, 'age'));

/*
* 创建一个新的函数finder。它接收两个函数：一个用来生成可比较的值，而另一个用来比较两个值并返回当中的“最佳”值
* 
* */
console.log(Math.random().toString(36));





