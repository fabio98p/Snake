import { SnakePieceModel } from './snakePieceModel.js'

export class CellModel {
	id
	x
	y
	htmlClass

	grid
	gridId

	snake
	snakeId

	stone
	stoneId

	turtle
	turtleId

    apple
    appleId

	constructor(x, y) {
		this.id = `x${x}_y${y}`
		this.x = x
		this.y = y
		this.htmlClass = 'empty'
	}

	//#region
	get getId() {
		return this.id
	}
	set setId(id) {
		this.id = id
	}
	get getX() {
		return this.x
	}
	set setX(x) {
		this.x = x
	}
	get getY() {
		return this.y
	}
	set setY(y) {
		this.y = y
	}
	get getHtmlClass() {
		return this.htmlClass
	}
	set setHtmlClass(htmlClass) {
		this.htmlClass = htmlClass
	}
	//#endregion

	//#region relation with grid
	get getGrid() {
		return this.grid
	}
	set setGrid(grid) {
		this.grid = grid
	}
    get getGridId() {
        return this.gridId
    }
	set setGridId(gridId) {
		this.gridId = gridId
	}
	//#endregion

	//#region relation with sotone
	get getStone() {
		return this.stone
	}
	set setStone(stone) {
		this.stone = stone
	}
	get getStoneId() {
		return this.stoneId
	}
	set setStoneId(stoneId) {
		this.stoneId = stoneId
	}
	//#endregion

	//#region relation with turtle
	get getTurtle() {
		return this.turtle
	}
	set setTurtle(turtle) {
		this.turtle = turtle
	}
	get getTurtleId() {
		return this.turtleId
	}
	set setTurtleId(turtleId) {
		this.turtleId = turtleId
	}
	//#endregion
	//#region relation with apple

	get getApple() {
		return this.apple
	}
	set setApple(apple) {
		this.apple = apple
	}
	get getAppleId() {
		return this.appleId
	}
	set setAppleId(appleId) {
		this.appleId = appleId
	}
	//#endregion
	//#region relation with snake
	get getSnake() {
		return this.snake
	}
	set setSnake(snake) {
		this.snake = snake
	}
	get getSnakeId() {
		return this.snakeId
	}
	set setSnakeId(snakeId) {
		this.snakeId = snakeId
	}
	//#endregion
}
