let arr = [12, 3];
// @ts-ignore
let [a, b] = arr;
//var a = arr[0], b = arr[1];
console.log(a, b);//12 3

function f3([a, b]: [number, number]) {
    console.log(a, b);
}

// @ts-ignore
f3(arr);

//剩余变量
let [firt, ...rest] = [1, 2, 3, 5];
console.log(firt, rest);//1 [ 2, 3, 5 ]

//忽略你不关心的尾随元素
let [first2] = [1, 2, 3, 4];
console.log(first2); // outputs 1

let [, second, , fourth] = [1, 2, 3, 4];
console.log(second, fourth);//2 4

console.log(66666666666666);
