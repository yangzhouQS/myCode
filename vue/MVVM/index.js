function Xian(options = {}){
	this.$options = options;
	var data = this._data = this.$options.data;
	observe(data);

	//实现this代理 this._data,方便设置数据和获取数据
	for(const key in data){
		Object.defineProperty(this, key, {
			enumerable : true,
			get(){
				return this._data[ key ];//this.a
			},
			set(newVal){//设置数据
				this._data[ key ] = newVal;
			},
		});
	}
	new Compile(options.el, this);

}

/**
 * 模板编译:获取{{ 数据}} , 解析数据 , 模板替换 , 内替换
 * @param el
 * @param vm
 * @constructor
 */
function Compile(el, vm){
	vm.$el = document.querySelector(el);
	let frg = document.createDocumentFragment();//创建文档碎片
	while(child = vm.$el.firstChild){
		frg.append(child);
	}

	replace(frg);//替换
	function replace(frg){
		Array.from(frg.childNodes).forEach((node, index) => {//循环操作每一个节点
			// console.log(index, node);
			let text = node.textContent;//获取元素节点的文本内容
			let reg = /\{\{(.*)\}\}/;//获取正则匹配

			// console.log(index, node, text, '--', node.nodeType);

			//nodeType ==3 =>代表元素或属性中的文本内容
			//text.nodeType === 1	代表元素
			if(node.nodeType === 3 && reg.test(text)){
				// console.log(RegExp.$1);
				let arr = RegExp.$1.split('.');//["a", "b"]
				let val = vm;
				arr.forEach(item => {//this.a.b    this.b
					val = val[ item ];
				});
				//模板替换
				node.textContent = node.textContent.replace(/\{\{(.*)\}\}/, val);
			}
			if(node.childNodes){//如果还有子节点递归遍历
				replace(node);
			}
		});
	}

	vm.$el.appendChild(frg);

	// console.log(vm.$el.firstChild);
}

function Observe(data){
	for(const key in data){
		let val = data[ key ];//当前操作的属性
		observe(val);//防止val又是对象
		//使用Object.defineProperty全部劫持对象data数据
		Object.defineProperty(data, key, {
			enumerable : true,
			get(){//获取值
				return val;
			},
			set(newVal){//修改值
				if(newVal === val){//期望修改的值和此时的值是一样的,忽视
					return;
				} else{
					val = newVal;//重新赋值新的值,重新获取的时候获取的是新的值
					observe(newVal);//深度实现观察,进行数据劫持
				}
			},
		});
	}
}

function observe(data){
	if(typeof data !== 'object') return;
	return new Observe(data);
}

/*
* Vue不可以新增不存在的属性
* 不存在的属性没有set和get,无法进行数据劫持
* */


/**
 * 发布订阅实现双向数据绑定
 * @constructor
 */
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
