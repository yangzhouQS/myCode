//为string起别名为myString,可以定制自己的数据类型
type myString = string;
let str: myString = "xainjs";
console.log(str);

//联合类型
type string2Number = string | number;
let astr: string2Number = 'xianjs';
astr = 123;
console.log(astr);
