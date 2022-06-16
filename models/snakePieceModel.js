export class SnakePieceModel {
	id
	roleOfSnake
	direction

	snake
	snakeId
	cell
	cellId
	constructor() {
		this.snakeLength = null
		this.direction = null
	}

	//#region
	get getRoleOfSnake() {
		return this.roleOfSnake
	}
	set setRoleOfSnake(id) {
		this.roleOfSnake = roleOfSnake
	}
	get getDirection() {
		return this.direction
	}
	set setDirection(x) {
		this.direction = direction
	}
	//#endregion

	//#region relation with snake
	get getSnake() {
		return this.snake
	}
	set setSnake(snake) {
		this.snake = snake
	}
	set setSnakeId(snakeId) {
		this.snakeId = snakeId
	}
	get getSnakeId() {
		return this.snakeId
	}
	//#endregion+

	//#region relation with cell
	get getCell() {
		return this.cell
	}
	set setCell(cell) {
		this.cell = cell
	}
	set setCellId(cellId) {
		this.cellId = cellId
	}
	get getCellId() {
		return this.cellId
	}
	//#endregion
}
