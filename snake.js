class Snake {
	snakelist = []
	constructor(pos_x, pos_y) {
		this.position_x = pos_x
		this.position_y = pos_y
		this.snakelist.push(
			{
				"id": 0,
				"pos_x": this.position_x,
				"pos_y": this.position_y,
				"type": "body/head",
				"direction": "vertical/orrizzontal"
			})
		this.StartGame();
	}
	Movment(direction){
		switch (direction) {
			case "left":
				this.MovmentLeft(direction);
				break;
			case "up":
				this.MovmentUp(direction);
				break;
			case "right":
				this.MovmentRight(direction);
				break;
			case "down":
				this.MovmentDown(direction);
				break;
			default:
				break;
		}
		return this.snakelist
	}
	MovmentLeft() {
		if (this.position_x == 0) {
			this.position_x = 11;
			GetQueueSnake()
			GetHeadSnake()
			
		} else {
			this.position_x--;
		}
	}
	MovmentRight() {
		if (this.position_x == 11) {
			this.position_x = 0;
		} else {
			this.position_x++;
		}
	}
	MovmentUp() {
		if (this.position_y == 0) {
			this.position_y = 11;
		} else {
			this.position_y--;
		}
	}
	MovmentDown() {
		if (this.position_y == 11) {
			this.position_y = 0;
		} else {
			this.position_y++;
		}
	}
	GetQueueSnake() {
		var i = this.snakelist[0].id
		this.snakelist.forEach(element => {
			if (element.id > i) {
				i = element.id
			}
		})
		return i
	}
	GetHeadSnake() {
		var i = this.snakelist[0].id
		this.snakelist.forEach(element => {
			if (element.id > i) {
				i = element.id
			}
		})
		return i
	}
	CreateElementOfSnake(){
		let head = this.GetHeadSnake()
		this.snakelist.push(
		{
			"id": head++,
			"pos_x": this.position_x,
			"pos_y": this.position_y,
			"type": "body/head",
			"direction": "vertical/orrizzontal"
		})
	}
}