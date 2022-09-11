export class CellModel {
	id
	x
	y
	htmlClass
	constructor(x, y) {
		this.id = `x${x}_y${y}`
		this.x = x
		this.y = y
		this.htmlClass = 'empty'
	}
	UpdateHtmlClass(className) {
		this.htmlClass = className
	}
}
