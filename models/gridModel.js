export class GridModel {
	id
	dimension_x
	dimension_y
	gridCells = []

	constructor(dimension_x, dimension_y) {
		this.dimension_x = dimension_x
		this.dimension_y = dimension_y
	}
	//#region
	get getDimension_x() {
		return this.dimension_x
	}
	set setDimension_x(dimension_x) {
		this.dimension_x = dimension_x
	}
	get getDimension_y() {
		return this.dimension_y
	}
	set setDimension_y(dimension_y) {
		this.dimension_y = dimension_y
	}
	//#endregion
    
    //#region relation with cell
    get getGridCells() {
        return this.gridCells
    }
    set setGridCells(gridCells) {
        this.gridCells = gridCells
    }
    //#endregion
}
