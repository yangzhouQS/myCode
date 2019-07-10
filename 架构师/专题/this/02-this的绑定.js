/*var xiaofang = {
  name: 'Xiao Fang',
};

var xiaoming = {
  name: 'Xiao Ming',
  run: function () {
    console.log(`${this.name} seems happy`);
  },
};

xiaofang.run = xiaoming.run;
// 主语变成了小芳
xiaofang.run();//Xiao Fang seems happy*/

/*

var xiaofang = {
  name: 'Xiao Fang',
};

var xiaoming = {
  name: 'Xiao Ming',
  run: function () {
    console.log(`${this.name} seems happy`);
  },
};

// 将小明的run方法绑定（bind）后，返回的还是一个
// 函数，但是这个函数之后被调用的时候就算主语不是小明，
// 它的this依然是小明
xiaoming.run = xiaoming.run.bind(xiaoming);

xiaofang.run = xiaoming.run;
// 主语虽然是小芳，但是最后this还是小明
xiaofang.run();//Xiao Ming seems happy
*/


var xiaofang = {
  name: 'Xiao Fang',
};

var xiaoming = {
  name: 'Xiao Ming',
  run: function () {
    console.log(`${this.name} seems happy`);
  },
};

xiaoming.run.call(xiaofang);