(function(w) {
	//蛇的构造函数
	function Snake(map, food) {
		//蛇的身体，默认是空
		this.bodys = [];
		//she是移动的方向 left top right bottom
		this.direction = 'right';
		//地图
		this.map = map;
		//食物 这里定义食物作为属性是为了
		this.food = food;

		this.danShenShe();
	}

	//方法一：获取并计算新蛇头的位置
	Snake.prototype.getNewHeadLocation = function() {
		var x;
		var y;
		var oldHead = this.bodys[0];
		if(oldHead === undefined) {
			return {
				left: 0,
				top: 0
			};
		}
		//有蛇头
		//获取原有蛇头的坐标，因为要给予原有蛇头坐标计算新蛇头
		x = oldHead.offsetLeft;
		y = oldHead.offsetTop;
		//根据蛇的方向，计算新坐标
		switch(this.direction) {
			case 'left':
				x = x - 20;
				break;
			case 'right':
				x = x + 20;
				break;
			case 'top':
				y = y - 20;
				break;
			case 'bottom':
				y = y + 20;
				break;
		}

		return {
			left: x,
			top: y
		}
	}

	//方法二：怎加新蛇头
	Snake.prototype.insertNewHead = function() {
		//1.找到原有的蛇头，改为身体
		var oldHead = this.bodys[0];
		//2.如果蛇头存在，则把蛇头改为身体
		if(oldHead !== undefined) {
			oldHead.className = 'snake-body';
		}
		//3.如果没有新蛇头，动态创建一个新蛇头，给新蛇头添加类名
		var newHead = document.createElement('div');
		newHead.className = 'snake-head';
		//4.计算新蛇头的坐标
		var locationObj = this.getNewHeadLocation();
		//5.设置思念蛇头的坐标
		newHead.style.left = locationObj.left + 'px';
		newHead.style.top = locationObj.top + 'px';
		//6.将新蛇头追加到地图上
		this.map.appendChild(newHead);
		// 7. 把 蛇头存入身体组中的第一个位置
		this.bodys.unshift(newHead);
	}

	//方法三：诞生蛇
	Snake.prototype.danShenShe = function() {
		this.insertNewHead();
		this.insertNewHead();
		this.insertNewHead();
	}

	//方法四：蛇移动
	Snake.prototype.move = function() {
		//获取最新蛇头的位置
		var locationObj = this.getNewHeadLocation();
		//4.1移除蛇族中的最后一节，并返回接受
		var last = this.bodys.pop();
		//4.2把原有的蛇头变为身体
		this.bodys[0].className = 'snake-body';

		this.bodys.unshift(last);
		last.className = 'snake-head';
		last.style.left = locationObj.left + 'px';
		last.style.top = locationObj.top + 'px';
	}
	w.S = Snake;
})(window);