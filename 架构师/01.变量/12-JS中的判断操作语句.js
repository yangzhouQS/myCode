/*
var num = -6;
if (num > 10) {
  num++; //=>num=num+1 num+=1 在自身的基础上累加1
} else if (num >= 0 && num <= 10) {
  num--;
} else {
  num += 2;
}
console.log(num);
*/
/*var num = 10;
if (num > 5) {
  num += 2;
} else if (num > 8) {
  num += 3;
} else {
  num += 4;
}
console.log(num); //=>12*/

//=>在JS中，+ - * / % 都是数学运算，除 + 以外，其余运算符在运算的时候，如果遇到了非数字类型的值，首先会转换为数字类型（Number），然后再进行运算

//=>+ 在JS中除了数学相加，还有字符串拼接的作用（如果运算中遇到了字符串，则为字符串拼接，而不是数学相加）
// if ('3px' + 3) {
if ('3px' - 3) {
  console.log('OK');
} else {
  console.log('NO');
}

function demo01() {
  var num = parseInt('width:35.5px');
  if (num == 35.5) {
    console.log(0);
  } else if (num == 35) {
    console.log(1);
  } else if (num == NaN) {
    console.log(2);
  } else if (typeof num == 'number') {
    //=>先算typeof num
    //=>在做比较
    //=>alert输出的都是字符串格式的 '3'
    console.log(3);
  } else {
    console.log(4);
  }
}

// demo01();

function demo02() {
  var num = 12;
  /*if (num > 0) {
      if (num < 10) {
          num++;
      } else {
          num--;
      }
  } else {
      if (num == 0) {
          num++;
          num = num / 10;
      }
  }*/
  num > 0 ? (num < 10 ? num++ : num--) : (num === 0 ? (num++, num = num / 10) : null);
  console.log(num);
}

demo02();
