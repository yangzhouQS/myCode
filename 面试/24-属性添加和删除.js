//对象添加属性
let obj = {};
obj.a = 100;//点添加
obj['b'] = 99;// 中括号添加
let name = Symbol('name');
obj[name] = '李四';//变量的形式态
obj[{'xxx': 'sb'}] = '牛逼不';//对象作为属性
obj[[function () {
}]] = '函数也是可以作为属性的';//属性作为属性

//获取属性
// console.log(obj[name]);
// console.log(obj.a);
// console.log(obj['a']);

//属性的删除
/*
* 通过delete运算符删除属性
* */
delete obj.a;
//获取不存在的属性返回的是undefined
console.log(obj.a);//undefined
obj.b = null;//将obj的b属性置为null但是不会删除
