//卖家
let obj = {};//发布者
obj.list = [];//缓存列表
obj.listen = function (fn) {//订阅信息,增加到任务队列
  this.list.push(fn);
};
obj.trigger = function () {//发布者
  this.list.forEach((fn, index, array) => {
    console.log('--------');
    fn.apply(this, arguments);
  });
};

//订阅者
obj.listen(function (color, size) {
  console.log('小明');
  console.log('喜欢' + color);
  console.log('尺寸' + size);
});
obj.listen(function (color, size) {
  console.log('阿龙');
  console.log('喜欢' + color);
  console.log('尺寸' + size);
});
obj.trigger('白色', 26);//向全部的订阅者发布信息
