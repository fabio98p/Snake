class ElementOnGrid {

	dimennsione_x 
	dimennsione_y 
	constructor(dimennsione_x, dimennsione_y) {
		this.dimennsione_x = dimennsione_x
		this.dimennsione_y = dimennsione_y
	}

	CreateTurtle(snakePosition){
		return cell
	}
	
	FindFreeLocation() {
		for (let y = 0; y < this.dimension_y; y++) {
			for (let x = 0; x < this.dimension_x; x++) {
				this.grid.innerHTML += `<li id="x${x}_y${y}" class="cell cell-x${x} cell-y${y}"></li>`;
			}
		}
	}

}