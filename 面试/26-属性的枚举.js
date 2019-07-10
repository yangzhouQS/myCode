let obj = {
  name: '李四',
  age: 26,
  sex: '男',
  getName: function () {
    console.log(this.getName());
  },
};
Object.defineProperty(obj, 'money', {
  configurable: true,//是否可以删除
  enumerable: fa,//是否可以枚举默认值为true
  writable: false,//是否可以修改,默认为true可以修改的//设置为false是无法修改的
  value: 998998,
});
obj.money = 10;//writable设置为false时是无法修改的
console.log(obj);

//对象的属性enumerable设置为false的时候是无法枚举的
for (const key in obj) {
  console.log(key);//对象的属性//name age sex getName
  //console.log(obj[key]);//对象属性对应的值
}
