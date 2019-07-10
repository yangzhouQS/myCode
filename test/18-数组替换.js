//  将 3 号位复制到 0 号位
// [1, 2, 3, 4, 5].copyWithin(0, 3, 4)
let arr = [1, 2, 2, 3, 4, 5];
console.log(arr.copyWithin(0, 3, 5), arr);
// [4, 2, 3, 4, 5]
// -2 相当于 3 号位， -1 相当于 4 号位
//   [1, 2, 3, 4, 5].copyWithin(0, -2, -1)
// [4, 2, 3, 4, 5]
//  将 3 号位复制到 0 号位
[].copyWithin.call({ length : 5, 3 : 1 }, 0, 3);
// {0: 1, 3: 1, length: 5}
//  将 2 号位到数组结束，复制到 0 号位
var i32a = new Int32Array([1, 2, 3, 4, 5]);
i32a.copyWithin(0, 2);
// Int32Array [3, 4, 5, 4, 5]
//  对于没有部署 TypedArray 的 copyWithin 方法的平台
//  需要采用下面的写法
[].copyWithin.call(new Int32Array([1, 2, 3, 4, 5]), 0, 3, 4);

// Int32Array [4, 2, 3, 4, 5]


function Fn() {


}

let f = new Fn();
console.log(typeof f);//object
