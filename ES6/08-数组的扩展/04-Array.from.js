//伪数组,伪对象,类数组
let arrayLike = {
  '0': 'a',
  '1': 'b',
  '2': 'c',
  length: 3
};
console.log(arrayLike);//{ '0': 'a', '1': 'b', '2': 'c', length: 3 }
console.log([].slice.call(arrayLike));//[ 'a', 'b', 'c' ]
console.log(Array.from(arrayLike));//[ 'a', 'b', 'c' ]

// NodeList对象
let ps = document.querySelectorAll('p');
Array.from(ps).filter(p => {
  return p.textContent.length > 100;
});

// arguments对象
function foo() {
  var args = Array.from(arguments);
  console.log(args);//[ 1, 2, 3, 4 ]
}
foo(1, 2, 3, 4);
