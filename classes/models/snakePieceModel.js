class SnakePieceModel {
	constructor() {
		snakeLength: null
		roleOfSnake: []
		direction: null
	}
    
    SnakeHead(){
        this.snakeLength = 1
        this.roleOfSnake.push('headOfSnake')
        this.direction = null
    }
    SnakeOldHead(){
        this.snakeLength = 2
        this.roleOfSnake.push('bodyOfSnake')
        this.direction = null
    }
    
}
