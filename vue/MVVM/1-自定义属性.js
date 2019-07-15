let obj = {};
Object.defineProperty(obj, 'name', {
	configurable : true,
	writable : true,
	enumerable : true,
	value : 'xianjs',
	set(val){
		console.log(val);
	},
	get(key){
		return '111';
	},
});
for(const objKey in obj){
	console.log(objKey);
}

