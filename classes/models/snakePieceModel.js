class SnakePieceModel {
	snakeLength
	roleOfSnake
	direction
	constructor() {
		this.snakeLength = null
		this.roleOfSnake = []
		this.direction = null
	}
	UpdateSnakeLengthMinusOne() {
		this.snakeLength = this.snakeLength - 1
	}

	UpdateOldSnakeHead() {
		this.roleOfSnake = this.roleOfSnake.filter(part => part !== 'headOfSnake')
		this.roleOfSnake.push('bodyOfSnake')
	}

	CreateSnake() {
		this.snakeLength = 1
		this.roleOfSnake.push('headOfSnake')
		this.roleOfSnake.push('queueOfSnake')
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
		this.RemoveRoleOfSnake('bodyOfSnake')
		this.roleOfSnake.push('queueOfSnake')
	}

	RemoveRoleOfSnake(roleByRemove) {
		const index = this.roleOfSnake.indexOf(`${roleByRemove}`)
		if (index > -1) {
			this.roleOfSnake.splice(index, 1)
		}
	}
}
