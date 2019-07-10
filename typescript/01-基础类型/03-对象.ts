//1.接口的基本使用
interface Person {
  name: string;
  age: number;
}

let obj: Person = {
  name: '李四',
  age: 26,
};

//2.可选属性
interface Person2 {
  name: string;
  age?: number;//age为可选的属性
}

let obj2: Person2 = {
  name: "李四",
};
console.log(obj, obj2);

//3.任意属性类型
//任意类型:一旦定义任意类型,那么确定属性和可选的属性必须都是他的子类型
interface Person3 {
  name: string;
  age?: number;

  [prop: string]: any;//任意类型
}

let obj3: Person3 = {
  name: "大牛",
  age: 0,
  sex: '男',
}

//4.只读属性:readonly
interface Person4 {
  readonly name: string;
  age: number;
}

let obj4: Person4 = {
  name: 'tom',
  age: 26,
};
//修改age
obj4.age = 26;
//修改只读属性
// obj4.name='jack';//禁止修改的
console.log(obj4);

//5.函数类型的接口
// 接口能够描述JavaScript中对象拥有的各种各样的外形。 除了描述带有属性的普通对象外，接口也可以描述函数类型。
//
// 为了使用接口表示函数类型，我们需要给接口定义一个调用签名。 它就像是一个只有参数列表和返回值类型的函数定义。参数列表里的每个参数都需要名字和类型。

interface Func {
  //两个参数类型,返回值类型
  (a: number, age: number): boolean;
}

let func2: Func;
func2 = function (a: number, b: number): boolean {
  return a - b > 0;
}

console.log(func2(1, 3));




