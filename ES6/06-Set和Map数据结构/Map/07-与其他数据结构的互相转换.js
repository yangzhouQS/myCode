//与其他数据结构的互相转换
//1 - map转换为数组
let map = new Map().set(0, 'a').set(1, 'b').set(2, 'c');
console.log([...map]);//[ [ 0, 'a' ], [ 1, 'b' ], [ 2, 'c' ] ]
//2 - 数组转换为map
let arr = [[1, 2], [2, 3], [4, 5]];
console.log(new Map([...arr]));
//Map { 1 => 2, 2 => 3, 4 => 5 }


//4 - Map 转为 JSON










