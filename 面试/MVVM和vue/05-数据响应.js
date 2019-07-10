let mv = {}
let data = {
  price: 100,
  name: '张三'
}

//data数据全部进行代理
let key, value;
for (key in data) {
  // 命中闭包。新建一个函数，保证 key 的独立的作用域
  (function (key) {
    Object.defineProperty(mv, key, {
      get: function () {
        console.log('get');
        return data[key];
      },
      set: function (newVal) {
        console.log('set');
        data[key] = newVal
      }
    })
  })(key);
}
