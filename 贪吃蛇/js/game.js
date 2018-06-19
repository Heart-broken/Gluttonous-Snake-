(function(w) {
	//定义游戏的构造函数
	function Game(map) {
		//地图
		this.map = map;
		//创建食物对象
		 this.food = new F(this.map);
		//创建蛇对象
		this.snake = new S(this.map, this.food);
	}

	Game.prototype.start = function() {
		//食物随机出现
		this.food.randomLoaction();
		//诞生蛇
		this.snake.danShenShe();
		//蛇要不断的移动
		setInterval(function() {
			this.snake.move();
		}.bind(this), 100)

		//游戏开始后，可以通过键盘控制蛇的移动方向
		document.onkeydown = function(e) {
			switch(e.keyCode) {
				case 37:
					if(this.snake.direction != 'right') {
						this.snake.direction = 'left'
					}
					break;
				case 38:
					if(this.snake.direction != 'bottom') {
						this.snake.direction = 'top'
					}
					break;
				case 39:
					if(this.snake.direction != 'left') {
						this.snake.direction = 'right'
					}
					break;
				case 40:
					if(this.snake.direction != 'top') {
						this.snake.direction = 'bottom'
					}
					break;
			}
		}.bind(this);
		//给document注册事件
		//在事件中通过事件对象中的keycode实现按键甄别
		//根据方向键更改蛇的方向

	}

	w.G = Game;
})(window)