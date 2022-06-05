class CellModel {
	id
	x
	y
	snake
	htmlClass
	constructor(x, y) {
		this.id = `x${x}_y${y}`
		this.x = x
		this.y = y
		this.snake = new SnakePieceModel()
		this.htmlClass = 'empty'
	}
	UpdateHtmlClass(className) {
		this.htmlClass = className
	}
	updateSnakeCell(cell) {
		this.snake = cell.snake
		this.htmlClass = cell.htmlClass
	}
}
