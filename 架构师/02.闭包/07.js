var n = 0;

function a() {
  var n = 10;
  function b() {
    n++;
    console.log(n);
  }

  b();//a()调用b()立即执行一次
  return b;
}

var c = a(); //11
c();//12
console.log(n);//0




