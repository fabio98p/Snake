class GridModel {
	dimension_x
	dimension_y
	gridCells = []
	constructor(dimension_x, dimension_y) {
        this.dimension_x = dimension_x
        this.dimension_y = dimension_y
        for (let y = 0; y < this.dimension_y; y++) {
			for (let x = 0; x < this.dimension_y; x++) {
				this.grid.push(new Cell(x, y))
			}
		}
	}
    ClearGrid() {
        this.grid.forEach(cell => {
            cell.htmlClass = "empty"
            cell.snake.snakeLength = null
            cell.snake.partOfSnake = []
            cell.snake.direction = null
        })
    }
}
