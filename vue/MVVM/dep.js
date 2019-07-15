function Dep(){
	this.subs = [];
}

/**
 * 订阅的方法
 * @param sub
 */
Dep.prototype.addSub = function(sub){
	this.subs.push(sub);
};
/**
 * 发布的方法
 */
Dep.prototype.notfiy = function(){
	this.subs.forEach(sub => sub.update());
};

/**
 * 通过Watch创建的实例都有update方法
 * @param fn
 * @constructor
 */
function Watch(fn){
	this.fn = fn;
}

Watch.prototype.update = function(){
	this.fn();
};
let watcher = new Watch(function(){
	console.log(12);
});
let dep = new Dep();
dep.addSub(watcher);//订阅
dep.addSub(watcher);
console.log(dep.subs);//[ Watch { fn: [Function] }, Watch { fn: [Function] } ] 两个订阅者
//执行发布
dep.notfiy();
