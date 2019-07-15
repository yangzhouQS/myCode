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


