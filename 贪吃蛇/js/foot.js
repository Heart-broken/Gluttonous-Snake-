(function(w) {
	/*
 	食物 -构造函数
 	参数 -map 地图
 * */
	function Food(map) {
		//食物的横向坐标
		this.x = 0;
		//食物的纵向坐标
		this.y = 0;
		//地图
		this.map = map;
		//需要一个divDOM元素
		this.div = document.createElement('div');
		//设定食物的类名
		this.div.className = 'food';
		//追加到地图中
		this.map.appendChild(this.div);
		this.randomLoaction();

	}

	//通过食物的原型，追加一个随机位置的方法
	Food.prototype.randomLoaction = function() {
		// 横向最大的索引数
		var maxXIndex = 900 / 20 - 1;
		// 纵向最大的索引数
		var maxYIndex = 600 / 20 - 1;
		// 更改this.x
		this.x = getRandomIntInclusive(0, maxXIndex) * 20;
		// 更改this.y
		this.y = getRandomIntInclusive(0, maxYIndex) * 20;
		//设置div的坐标
		this.div.style.left = this.x + 'px';
		this.div.style.top = this.y + 'px';
	}

	/*
	 		封装实现 两个整数之间的随机数
	 * */
	//	function getIntRandom(min, max) {
	//		return parseInt(Math.random() * (max - min + 1) + min);
	//	}
	//	

	function getRandomIntInclusive(min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
	}
	// 通过window把食物暴露出去
	w.F = Food;
})(window)