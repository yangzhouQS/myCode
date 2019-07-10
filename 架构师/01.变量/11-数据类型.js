const obj = {
  name : 'xianjs',
  age : 3,
};

//对象访问属性
console.log(obj.name);
console.log(obj['name']);

//对象增加属性
obj.a = 1;
obj['b'] = 2;

//对象删除属性
delete obj.a;
delete obj['b'];

//对象修改属性
obj.age = 2;
