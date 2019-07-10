let obj = {
  name: '李四', age: '26岁', getName: function () {
    console.log(this.name);
  }
};
//对象序列化为字符串
//函数方法会丢失
console.log(JSON.stringify(obj));//{"name":"李四","age":"26岁"}
console.log(typeof JSON.stringify(obj));//string

//JSON.parse()将对象字符串反序列化为对象,但是函数会丢失
console.log(JSON.parse(JSON.stringify(obj)));//{ name: '李四', age: '26岁' }

const name = 'man';


