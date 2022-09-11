import { CellModel } from './cellModel.js'

export class SnakePieceModel extends CellModel {
	snakeLength
	roleOfSnake
	direction
	isSnake = true
	constructor(x, y, snakeLength) {
		super(x, y)
		this.snakeLength = null
		this.roleOfSnake = []
		this.direction = null
		if (snakeLength == 0) this.CreateSnake()
        if(snakeLength > 0) this.AddPartOfSnake(snakeLength)
	}
	UpdateSnakeLengthMinusOne() {
		this.snakeLength = this.snakeLength - 1
	}

	UpdateOldSnakeHead() {
		this.roleOfSnake = this.roleOfSnake.filter(part => part !== 'headOfSnake')
		this.AddRoleOfSnake('bodyOfSnake')
	}

	CreateSnake() {
		this.snakeLength = 1
		this.AddRoleOfSnake('headOfSnake')
		this.AddRoleOfSnake('queueOfSnake')
		this.direction = null
	}

	AddPartOfSnake(snakeLength) {
		this.snakeLength = snakeLength + 1
		this.AddRoleOfSnake('headOfSnake')
		this.direction = null
		if (snakeLength == 1) {
			this.AddRoleOfSnake('queueOfSnake')
		}
	}

	SnakeOldHead() {
		this.snakeLength = 2
		this.AddRoleOfSnake('bodyOfSnake')
		this.RemoveRoleOfSnake('headOfSnake')
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
		this.AddRoleOfSnake('headOfSnake')
		this.snakeLength = 1
	}

	SetQueueOfSnake() {
		this.RemoveRoleOfSnake('bodyOfSnake')
		this.AddRoleOfSnake('queueOfSnake')
	}

	RemoveRoleOfSnake(roleToRemove) {
		this.roleOfSnake.filter(role => role !== roleToRemove)
	}

	AddRoleOfSnake(roleToAdd) {
		if (!this.FindRoleOfSnake(roleToAdd)) {
			return this.roleOfSnake.push(roleToAdd)
		}
		return false
	}

	FindRoleOfSnake(roleToFind) {
		return this.roleOfSnake.includes(roleToFind)
	}
}
