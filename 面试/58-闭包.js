'use strict';

var a = 4;

function b(x, y, a) {

  console.log(arguments);
  console.log(a);//3
  arguments[2] = 10;
  console.log(a);//10
  console.log(arguments);
}

a = b(1, 2, 3);
console.log(a);