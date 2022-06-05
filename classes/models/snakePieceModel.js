class SnakePieceModel {
	snakeLength
	roleOfSnake
	direction
	constructor() {
		snakeLength: null
		roleOfSnake: []
		direction: null
	}
	UdateSnakeLengthMinusOne() {
		this.snakeLength = this.snakeLength - 1
	}

	UpdateOldSnakeHead() {
		this.roleOfSnake = this.roleOfSnake.filter(part => part !== 'headOfSnake')
		this.roleOfSnake.push('bodyOfSnake')
	}

	SnakeHead() {
		this.snakeLength = 1
		this.roleOfSnake.push('headOfSnake')
		this.direction = null
	}
	SnakeOldHead() {
		this.snakeLength = 2
		this.roleOfSnake.push('bodyOfSnake')
		this.direction = null
	}
	SnakeLength() {
		return this.snakeLength
	}

	RemovePartOfSnake() {
		this.snakeLength = null
		this.roleOfSnake = []
		this.direction = null
	}

	SetHeadOfSnake() {
		this.roleOfSnake.push('headOfSnake')
		this.snakeLength = 1
	}

	SetQueueOfSnake() {
		this.roleByRemove('bodyOfSnake')
		this.roleOfSnake.push('queueOfSnake')
	}

	RemoveRoleOfSnake(roleByRemove) {
		const index = array.indexOf(`${roleByRemove}`)
		if (index > -1) {
			array.splice(index, 1)
		}
	}
}
