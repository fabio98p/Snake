class Snake {
	snakelist = []
    position_x = 0
    position_y = 0

	constructor(pos_x, pos_y) {
		this.snakelist.push(
			{
				"id": 0,
				"pos_x": pos_x,
				"pos_y": pos_y,
				"type": "body/head",
				"direction": "vertical/orrizzontal"
			}
        )
	}

	Movment(direction, pos_x, pos_y){
		this.position_x = this.GetHeadSnake()[0].pos_x
		this.position_y = this.GetHeadSnake()[0].pos_y
		this.direction = direction
		switch (this.direction) {
			case "left":
				this.MovmentLeft();
				break;
			case "up":
				this.MovmentUp();
				break;
			case "right":
				this.MovmentRight();
				break;
			case "down":
				this.MovmentDown();
				break;
			default:
				break;
		}
		return this.snakelist
	}

	MovmentLeft() {
        this.RemoveQueueOfSnake()
		if (this.position_x == 0) {
			this.position_x = 11;
		} else {
			this.position_x--;
		}
        this.CreateElementOfSnake()
	}

	MovmentRight() {
        this.RemoveQueueOfSnake()
		if (this.position_x == 11) {
			this.position_x = 0;
		} else {
			this.position_x++;
		}
        this.CreateElementOfSnake()
	}

	MovmentUp() {
        this.RemoveQueueOfSnake()
		if (this.position_y == 0) {
			this.position_y = 11;
		} else {
			this.position_y--;
		}
        this.CreateElementOfSnake()
	}

	MovmentDown() {
        this.RemoveQueueOfSnake()
		if (this.position_y == 11) {
			this.position_y = 0;
		} else {
			this.position_y++;
		}
        this.CreateElementOfSnake()
	}

	GetQueueSnake() {
		var i = this.snakelist[0].id
		this.snakelist.forEach(element => {
			if (element.id > i) {
				i = element.id
			}
		})
		return this.snakelist.filter( element => element.id == i)
	}

	GetHeadSnake() {
		var i = this.snakelist[0].id
		this.snakelist.forEach(element => {
			if (element.id > i) {
				i = element.id
			}
		})
		return this.snakelist.filter( element => element.id == i)
	}

	CreateElementOfSnake(){
        if (this.snakelist.length > 0) {
            let headId = this.GetHeadSnake()[0].id
            this.snakelist.push(
            {
                "id": headId++,
                "pos_x": this.position_x,
                "pos_y": this.position_y,
                "type": "body/head",
                "direction": "vertical/orrizzontal"
            })
        } else {
            let head = 0
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

    RemoveQueueOfSnake(){
        this.snakelist = this.snakelist.filter((item) => {
            return item.id !== this.GetQueueSnake()[0].id
        })
	}
    
    GetSnakeList(){
        return this.snakelist
    }
}