/*
let _ = require("./demo0.2");
let arr = [1, 2, 3, 2];
console.log(_.chain(arr));
console.log(_.chain(arr).values);
*/
let person = {'name': "李四", "age": 26};

console.log(!true && 123);
console.log(!Array.isArray([1, 2, 3]) && Object.keys(person));

// console.log(_.uniq(arr));

// console.log(_);
/*function isObject(obj) {
  return (typeof obj === 'function') || (typeof obj === 'object' && !!obj)
}*/


// function isArray(obj) {
//   return toString.call(obj) === '[object Array]';
// }
// console.log(isArray([]));

/*let arr = [1, 2, 3, 2, 'a', 'b'];
let arr2 = ['a', 'b'];

function isArray(obj) {
  return toString.call(obj).slice(8, -1) === 'Array';
}

function keys(obj) {
  return Object.keys(obj);
}

let person = {'name': "李四", "age": 26};

// console.log(keys(person));

function myMap(obj, fn) {
  var k = !isArray(obj) && keys(obj);
  let result = [];
  var len = (k || obj).length;
  for (var i = 0; i < len; i++) {
    var curKey = k ? k[i] : i;
    result.push(fn.call(obj, obj[curKey], i, obj));
  }
  console.log(k, len);
  return result;
}

var res = myMap(person, function (x) {
  console.log(x);
  // if (person.x === 'age') {
  //   return person.age + 2;
  // }
});*/
// console.log(res);

// myMap(person);


// var keys = !_.isArray(target) && _.keys(target);
// var length = (keys || target).length;


//[ [ 1, 2, 3, 2, 'a', 'b' ], [Function] ]
// _(arr).uniq(function (x) {
//   console.log(x);
// });

// console.log(Object.keys(arr2));//[ '0', '1' ]
// console.log(Object.keys([0, 1, 2]));//[ '0', '1', '2' ]


/*
* 数组合并
* */
// console.log(Array.prototype.push.apply(arr,arr2))
// console.log(arr);


/*var push = Array.prototype.push;


var arr = [1];
var arr3 = [1, 2, 3];
console.log(push.apply(arr, arr3));
console.log(arr);//[ 1, 1, 2, 3 ]*/
// let _ = require("./demo");
/*
function uniq(target) {
  var result = [];
  for (var i = 0, len = target.length; i < len; i++) {
    if (result.indexOf(target[i]) === -1) {
      console.log(result, target[i]);
      result.push(target[i]);
    }
  }
  return result;
}

console.log(uniq([1, 2, 3, 4, 3]));
*/

