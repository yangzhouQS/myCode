//值类型
let a = 100;
let b = a;//把a的值赋值一份赋值给b,a和b完全不会影响的
b = 99;
console.log(a, b);//100 99


//引用类型
var obj = {a: 1};
var obj2 = obj;
obj2['a'] = 10;
//引用数据类型进行赋值的时候引用的是地址值(传递的是地址)
console.log(obj, obj2);//{ a: 10 } { a: 10 }

