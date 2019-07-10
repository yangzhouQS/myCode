function f(a, b, c) {
  console.log(a, b, c);
}

//正确的参数传递
f(1, 2, 3);//1 2 3
f([1, 2, 4]);//只会当做一个参数处理,[ 1, 2, 4 ] undefined undefined
f.apply(null, [1, 2, 3]);//1 2 3

//ES6替代apply
f(...[1, 2, 3]);


//求数组的最大值替换apply
let arr = [3, 2, 1, 5, 6, 3];
console.log(Math.max.apply(null, arr));//6
console.log(Math.max(...arr));//6
console.log(Math.max(arr));//NaN
console.log(arr.join(','));//3,2,1,5,6,3
console.log(eval('Math.max(' + arr.join(',') + ')'));
console.log(eval('Math.max(' + arr.toString() + ')'));
console.log(arr.sort((a, b) => a - b)[arr.length - 1]);


//数组追加元素
let arr2 = [1, 2, 3];
let arr3 = [4, 5, 6];
//[].push.apply(arr2, arr3);
arr2.push(...arr3);
console.log(arr2);


// ES5
console.log(new (Date.bind.apply(Date, [null, 2015, 1, 1])));//2015-01-31T16:00:00.000Z
// ES6
console.log(new Date(...[2015, 1, 1]));
//2015-01-31T16:00:00.000Z