import { SnakePieceModel } from './snakePieceModel.js'

export class CellModel {
	id
	x
	y
	htmlClass

	snake
	snakeId

	stone
	stoneId

	turtle
	turtleId

	constructor(x, y) {
		this.id = `x${x}_y${y}`
		this.x = x
		this.y = y
		this.htmlClass = 'empty'
		// this.snake = new SnakePieceModel()
	}
	
	get getid() {
		return this.id
	}
	set setid(id) {
		this.id = id
	}
	get getx() {
		return this.x
	}
	set setx(x) {
		this.x = x
	}
	get gety() {
		return this.y
	}
	set sety(y) {
		this.y = y
	}
	get gethtmlClass() {
		return this.htmlClass
	}
	set sethtmlClass(htmlClass) {
		this.htmlClass = htmlClass
	}

	get getstone() {
		return this.stone
	}
	set setstone(stone) {
		this.stone = stone
	}
	get getStoneId() {
		return this.stoneId
	}
	set setStoneId(stoneId) {
		this.stoneId = stoneId
	}

	get getturtle() {
		return this.turtle
	}
	set setturtle(turtle) {
		this.turtle = turtle
	}
	get getTurtleId() {
		return this.turtleId
	}
	set setturtleId(turtleId) {
		this.turtleId = turtleId
	}

	get getsnake() {
		return this.snake
	}
	set setsnake(snake) {
		this.snake = snake
	}
	get getsnakeId() {
		return this.snakeId
	}
	set setsnakeId(snakeId) {
		this.snakeId = snakeId
	}

}
