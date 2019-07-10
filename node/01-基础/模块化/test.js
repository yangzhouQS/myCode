//导入模块
// const modelA = require('./a');
// console.log(modelA);
// console.log(modelA.func(1, 5));//6

/*
文件夹模块:
  不指定导入的模块时默认导入的是当前文件夹下的index.js导出的变量
  当我们导入的模块名称是一个文件夹的时候
  1. 读取该文件夹下的package.json文件
  2. 导入package.json文件中main选项指定的文件
  3. 如果不存在package.json或者main指定的文件，这默认自动导入模块文件夹下的index.js

如果我们导入的模块是在node_modules目录下的，又会有另外的一种规则
  如果模块的加载是以 ./ ../ / 开始的，那么就是路径模块加载模式
  不以 ./ ../ / 开始的模块，按照另外一种加载机制进行加载
       require()方法其实是module.require()
       当非路径加载模式的时候，会按照如果下规则进行模块的查找
           在module对象有一个属性，paths，是一个数组，里面保存的就是这种非路径加载
           模式需要查找的路径列表
  非路径模块加载，其实还有其他的几种情况
*/
const m = require('./m/');
console.log(m);