var vm = new Vue({
	el: "#app",
	data: {
		proList: [
			{
				"proImgSrc": "images/product/2.jpg",
				"proTitle": "三星GALAXY S6（G9200/全网通）",
				"proType": "G920f,G920i,G920A,G920K,G920L,G920S,G920T",
				"proPrice": 100,
				"proNums":1,
				"isChecked":false
			},
			{
				"proImgSrc": "images/product/3.jpg",
				"proTitle": "三星GALAXY S6（G9200/全网通）",
				"proType": "G920f,G920i,G920A,G920K,G920L,G920S,G920T",
				"proPrice": 200,
				"proNums":1,
				"isChecked":false
			},
			{
				"proImgSrc": "images/product/2.jpg",
				"proTitle": "三星GALAXY S6（G9200/全网通）",
				"proType": "G920f,G920i,G920A,G920K,G920L,G920S,G920T",
				"proPrice": 300,
				"proNums":1,
				"isChecked":false
			}
		]
	},
	methods:{
		changeNum(value){
			Number(value)
		}
	},
	computed:{
		allTotal(){
			let all = 0
			this.proList.forEach(function(item,i){
				if(item.isChecked){
					all += item.proPrice * item.proNums
				}
			})
			return all
		}
	}

})
