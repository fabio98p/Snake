export class TurtleModel {
    id

    cell
	cellId    
                     
	constructor() {}

    //#region relation with cell
	get getCell() {
		return this.cell
	}
	set setCell(cell) {
		this.cell = cell
	}
    get getCellId() {
        return this.cellId
    }
	set setCellId(cellId) {
		this.cellId = cellId
	}
	//#endregion
}
