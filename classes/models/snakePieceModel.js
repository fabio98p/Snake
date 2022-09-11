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
        this.AddPartOfSnake(snakeLength)

	}

	UpdateOldSnakeHead() {
		this.roleOfSnake = this.roleOfSnake.filter(part => part !== 'headOfSnake')
		this.AddRoleOfSnake('bodyOfSnake')
	}

	AddPartOfSnake(snakeLength) {
		this.snakeLength = snakeLength + 1
		this.AddRoleOfSnake('headOfSnake')
		this.direction = null
		if (snakeLength == 1 || snakeLength == 0) {
			this.AddRoleOfSnake('queueOfSnake')
		}
	}

	RemoveRoleOfSnake(roleToRemove) {
		this.roleOfSnake = this.roleOfSnake.filter(role => role !== roleToRemove)
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
