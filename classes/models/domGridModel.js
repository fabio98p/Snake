export class DomGridModel {
	htmlIdOfGrid
	dimension_x
	dimension_y
	constructor(dimension_x, dimension_y) {
		this.dimension_x = dimension_x
		this.dimension_y = dimension_y
		this.htmlIdOfGrid = document.getElementById('grid')

		for (let y = 0; y < this.dimension_y; y++) {
			for (let x = 0; x < this.dimension_y; x++) {
				this.htmlIdOfGrid.innerHTML += `<li id="x${x}_y${y}" class="cell cell-x${x} cell-y${y}"></li>`
			}
		}
	}

	UpdateGrid(grid) {
		this.ClearGrid()
		grid.forEach(cell => {
			document.getElementById(`${cell.id}`).classList.add(`${cell.htmlClass}`)
		})
	}

	ClearGrid() {
		let allCells = document.getElementsByClassName('cell')
		Array.from(allCells).forEach(cell => {
			cell.classList.remove('active', 'headOfSnake', 'bodyOfSnake', 'queueOfSnake', 'empty', 'snakeFood')
		})
	}
}
