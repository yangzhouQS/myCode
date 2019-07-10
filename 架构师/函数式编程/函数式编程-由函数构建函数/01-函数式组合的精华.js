let _ = require('./underscore');
let obj = {'0': 1, '1': 2, '2': 3, '3': 4};

function dispath() {
  var func = _.toArray(arguments);
  var len = func.length;
  return function (target) {
    var res = undefined;
    var args = _.rest(arguments);
    for (let i = 0; i < len; i++) {
      var fun = func[i];
      res = fun.apply(fun, constructor(target, args));
      if (existy(res)) {
        return res;
      }
    }
    return res;
  };
}

let arr = [1, 2, 3];
let method = arr.shift();
console.log(method);//1
let target = arr.shift();//2
console.log(target);
console.log(arr);//[ 3 ]
console.log(method.apply(target, arr));

