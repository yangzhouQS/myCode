/*
pop: 删除尾部一个元素,返回删除的末尾元素
push: 尾部添加元素,返回值为新数组的长度
shift: 头部删除一个元素,返回删除首位元素
unshift: 头部添加元素,返回值为新数组的长度
reverse: 数组翻转,修改原数组,返回值为翻转后的数组
slice: 方法返回一个新的数组对象，这一对象是一个由 begin和 end（不包括end）决定的原数组的浅拷贝。原始数组不会被改变。
       ==>slice 方法可以用来将一个类数组（Array-like）对象/集合转换成一个新数组。
       Array.prototype.slice.call(arguments);

       arr.slice(2, 5);//从索引为2的位置开始浅拷贝到数组索引为5的位置,不包含5
sort: 对数组的元素进行排序，并返回数组。
splice: 删除指定位置的内容、向数组指定位置增加内容、还可以修改指定位置的信息
  删除:修改原数组 arr.splise(start,count) start删除的起始位置, count删除的个数,返回删除的元素组成的数组
  新增:ary.splice(n,0,x,...)从索引n开始删除零项（没删除），把X或者更多需要插入的内容存放到数组中索引N的“前面”修改：ary.splice(n,m,x,...),返回空数组
  修改:修改的原理就是把原有内容删除掉，然后用新的内容替换这部分信息即可需求扩展：1. 删除数组最后一项，你有几种办法?2. 向数组末尾追加新内容，你有几种办法?//=>删除最后一项ary.pop()ary.splice(ary.length-1)ary.length--//=>向数组末尾追加新内容ary.push(100)ary.splice(ary.length,0,100)ary[ary.length]=1001.2.3.4.5.6.7.8.9.
      arr.splice(1, 1, 666) , 删除一个,替换为666,

includes: 方法用来判断一个数组是否包含一个指定的值，根据情况，如果包含则返回 true，否则返回false。
//这两个方法不兼容IE低版本浏览器(IE6~8)
indexOf: 方法返回在数组中可以找到一个给定元素的第一个索引，如果不存在，则返回-1。
lastIndexOf: 从数组的后面向前查找
join:方法将一个数组（或一个类数组对象）的所有元素连接成一个字符串并返回这个字符串。如果数组只有一个项目，那么将返回该项目而不使用分隔符。
concat:方法用于合并两个或多个数组。此方法不会更改现有数组，而是返回一个新数组。
find:
findIndex:
copyWithin: 
fill:
valueOf:

===删除数组的最后一个元素
arr.pop();
arr.splice(arr.length--);
arr.length--;

===向数组末尾追加新内容
arr.push(456);
arr[arr.length] = 456;
arr.splice(arr.length, 0, 456);

* 
*/
let arr = [4, 5, 6, 1, 2, 0];
var elements = ['Fire', 'Air', 'Water'];
