const m = new Map();
let obj = { name : "xx" };
//设置
m.set(obj, "456");//设置key对应的value
console.log(m);//Map { { name: 'xx' } => '456' }

//获取
let res = m.get(obj);//获取key对应的值
console.log(res);//456

//判断是否存在指定的key
console.log(m.has(obj));//true

//删除
m.delete(obj);
console.log(m.has(obj));//false
