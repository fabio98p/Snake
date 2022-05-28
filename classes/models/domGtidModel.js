class DomGridModel {
	constructor() {
	}
    CreateGrid(htmlGrid) {
        let grid = []
        for (let y = 0; y < this.dimension_y; y++) {
            for (let x = 0; x < this.dimension_y; x++) {
				htmlGrid.innerHTML += `<li id="x${x}_y${y}" class="cell cell-x${x} cell-y${y}"></li>`
            }
        }
        return grid
    }

    UpdateGrid(grid) {
        grid.gridCells.forEach(cell => {
			document.getElementById(`${cell.id}`).classList.add(`${cell.class}`)
		})
    }
}