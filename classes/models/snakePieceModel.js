export class SnakePieceModel {
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
		this.AddRoleOfSnake('bodyOfSnake')
	}

	CreateSnake() {
		this.snakeLength = 1
		this.AddRoleOfSnake('headOfSnake')
		this.AddRoleOfSnake('queueOfSnake')
		this.direction = null
	}
	SnakeOldHead() {
		this.snakeLength = 2
		this.AddRoleOfSnake('bodyOfSnake')
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
		const index = this.roleOfSnake.indexOf(`${roleToRemove}`)
		if (index > -1) {
			this.roleOfSnake.splice(index, 1)
		}
	}

	AddRoleOfSnake(roleToAdd) {
		//todo: qua c'e' un errore controllare se si toglie l'if
		if (!this.FindRoleOfSnake(roleToAdd)) {
			this.AddRoleOfSnake(roleToAdd)
		}
	}

	FindRoleOfSnake(roleToFind){
		return this.roleOfSnake.includes(roleToFind)
	}
}
