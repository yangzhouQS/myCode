let arr = [1, 2, 3, 4];
console.log(arr.push('b'));
console.log(arr.unshift('a'));//返回的是新数组的长度
console.log(arr.pop());//返回删除的元素
console.log(arr.shift());
// console.log(arr.splice(2,1));//起始位置为2,删除1个元素
//插入
console.log(arr.splice(2, 0, 'a', 'b'));//起始位置为2,删除0个元素,插入 a,b


console.log(arr);





