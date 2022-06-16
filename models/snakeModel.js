export class SnakeModel {
    id
    length

    snakePiece
    snakePieceId
	constructor() {
        this.length = 1
	}
    
    //#region 
    get getLength() {
        return this.length
    }
    set setLength(length) {
        this.length = length
    }
    //#endregion

    //#region relation with snakePiece
    get getSnakePiece() {
        return this.snakePiece
    }
    set setSnakePiece(snakePiece) {
        this.snakePiece = snakePiece
    }
    get getSnakePieceId() {
        return this.snakePieceId
    }
    set setSnakePieceId(snakePieceId) {
        this.snakePieceId = snakePieceId
    }
    //#endregion
    
	
}
