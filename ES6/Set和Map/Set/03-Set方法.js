const s = new Set([1, 2, 4, 3, 2, 1]);//创建Set数据结构是传递参数
console.log(s.size, s);//4 Set { 1, 2, 4, 3 }

//调用Set提供的add方法进行添加元素
const set = new Set();
set.add([1, 2]).add(4, 5).add([1, 2]);
//console.log(set);//Set { [ 1, 2 ], 4, [ 1, 2 ] }

//has判断集合是否存在指定元素,返回布尔值
// console.log(set.has(4));//true
set.add(2).add(5);
set.delete([1, 2]);
set.delete(2);
console.log(set);


/*
* 添加元素总结:
*   添加元素为复杂数据类型的时候,元素相同的数组Set认为是不相同的
*   add方法每次只可以添加一个元素 , 默认第一个
* 删除元素总结:delete
*   复杂数据类型无法删除
*   只可以传递一个删除的参数
* */
