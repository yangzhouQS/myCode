var ary = [1, 2, 3, 4];

function fn(ary) {//ary =[1, 2, 3, 4];
  ary[0] = 0;//ary = [0, 2, 3, 4];
  ary = [0];//ary = [0]
  ary[0] = 100; //ary = [100]
  return ary;// [100]
}

var res = fn(ary);
console.log(ary);//  [0, 2, 3, 4];
console.log(res);// [100]