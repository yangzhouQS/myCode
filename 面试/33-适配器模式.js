//适配器模式
//自行车 bike    人驱动 Hdrive
//电动车  Ebile   电驱动 Edrive

//自行车抽象类   便于扩展功能
var Bike = function () {
}
Bike.prototype.wheel = function () {
  throw new Error("错误")   //自定义错误信息
};
Bike.prototype.Hdrive = function () {
  throw new Error("错误")
};
//电动车抽象类   便于扩展功能
var Ebile = function () {
}
Ebile.prototype.wheel = function () {
  throw new Error("错误")
};
Ebile.prototype.Edrive = function () {
  throw new Error("错误")
};

//自行车的实现类
var RealizeBike = function () {
}
RealizeBike.prototype = new Bike(); //继承
RealizeBike.prototype.wheel = function () {
  console.log('我有二个轮子')
};
RealizeBike.prototype.Hdrive = function () {
  console.log('人驱动')
};
//电动车的实现类
var RealizeEbile = function () {
}
RealizeEbile.prototype = new Ebile(); //继承
RealizeEbile.prototype.wheel = function () {
  console.log('我有二个轮子')
};
RealizeEbile.prototype.Edrive = function () {
  console.log('电驱动')
};

//自行车适配器
var BikeAdapter = function (o) {
  //Ebile.apply(this);
  this.o = o;
};
BikeAdapter.prototype = new Ebile();//继承
BikeAdapter.prototype.Edrive = function () {
  console.log(this.o);
  console.log(this.o.wheel());
  //console.log(this.o.Hdrive());
};
var b1 = new RealizeBike();  //实例化自行车
//b1.Hdrive();//人驱动
var e1 = new RealizeEbile();  //实例化电动车
//e1.Edrive(); //电驱动
//适配器自行车的行为
var aa = new BikeAdapter(b1);
aa.Edrive();


