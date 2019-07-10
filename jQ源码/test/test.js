var flag = true;

console.log(typeof flag);

console.log(flag.constructor === Boolean);

let arr = null;
if (arr && arr.length) {
  console.log(1);
} else {
  console.log(2);
}
console.log('------');
var class2type = {};
var toString = Object.prototype.toString;

function type(obj) {
  return obj == null ? toString(obj) : class2type[toString.call(obj)] || 'object';
}

console.log(Object.prototype.toString.call([]));
// console.log(null == {}//false);
console.log(class2type[toString.call([])]);
console.log(type([]));

/*let obj = {
  length: 1,
  len: '2'
};
console.log(typeof 1);
console.log(typeof '1');
console.log(typeof obj.length);//number
console.log(typeof obj.len);//string*/

/*let arr2 = ['a', 'b', 'c', undefined];
let i = 0;
while (arr2[i] !== undefined) {
  console.log(arr2[i++]);
}
console.log('123');
for (let j = 0, len = arr2.length; j < len; j++) {
  console.log(arr2[j]);
}*/
// obj = {"0": "xianjs", "1": "465", "2": "10096"};
//{1: "465", 2: "10096"}
// console.log(obj['0']);


