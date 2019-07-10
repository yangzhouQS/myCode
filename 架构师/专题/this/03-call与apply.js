var xiaoming = {
  name: 'Xiao Ming'
};

function run(today, mood) {
  console.log(`Today is ${today}, ${this.name} seems ${mood}`);
}

// 函数的call方法第一个参数是this的值
// 后续只需按函数参数的顺序传参即可
run.call(xiaoming, 'Monday', 'happy');
//Today is Monday, Xiao Ming seems happy


// apply只接受两个参数
// 第二个参数是一个数组，这个数组的元素被按顺序
// 作为run调用的参数
run.apply(xiaoming, ['Monday', 'happy']);


