import { CellModel } from "./cellModel"

export class SnakeMovment {
	SnakeEatPosition = []
	constructor() {}
	Movment(direction, grid) {
		let snakeLengthNextRound = false
		let previusHeadCell
		let newIdHead
		let newQueueLength
		grid.map(cell => {
			this.SnakeEatPosition.map(cellSnakeEat =>{
				if (cell.id == cellSnakeEat.id) {
					cell.roleOfSnake.push("snakeFood")
				}
				else{
					cell.roleOfSnake
				}
			})
			if (cell.snake.snakeLength) {
				if(cell.snake.roleOfSnake.includes('snakeFood') && cell.snake.roleOfSnake.includes('queueOfSnake')){

					cell.snake.UpdateSnakeLengthMinusOne()
				}
				//update previus head
				if (cell.snake.roleOfSnake.includes('headOfSnake')) {
					previusHeadCell = cell
					cell.snake.UpdateOldSnakeHead()
					cell.UpdateHtmlClass('bodyOfSnake')
				}

				//remove previus queue and find the new queue
				if (cell.snake.roleOfSnake.includes('queueOfSnake')) {
					if(cell.snake.roleOfSnake.includes('snakeFood')){
						snakeLengthNextRound = true
					}
					newQueueLength = cell.snake.SnakeLength() + 1
					cell.snake.RemovePartOfSnake()
					cell.UpdateHtmlClass('empty')
				}
				if (snakeLengthNextRound) {
					snakeLengthNextRound = false
					grid.map(cell => {//da spostare sopra
						if (cell.snake.snakeLength == null){
							cell.snake.snakeLength++
						}
					})
				}
			}
		})
		switch (direction) {
			case 'left':
				newIdHead = this.MovmentLeft(previusHeadCell)
				break
			case 'up':
				newIdHead = this.MovmentUp(previusHeadCell)
				break
			case 'right':
				newIdHead = this.MovmentRight(previusHeadCell)
				break
			case 'down':
				newIdHead = this.MovmentDown(previusHeadCell)
				break
		}
		grid.forEach(cell => {
			if (cell.id == newIdHead) {
				cell.snake.SetHeadOfSnake()
				cell.UpdateHtmlClass('headOfSnake')
			}
			//add new queue previus finded
			if (cell.snake.snakeLength == newQueueLength) {
				cell.snake.SetQueueOfSnake()
				if (!cell.snake.roleOfSnake.includes('headOfSnake')) {
					cell.UpdateHtmlClass('queueOfSnake')
				}
			}
		})
		return grid
	}

	MovmentLeft(previusHead) {
		//find the new id of head
		if (previusHead.x == 0) return `x${11}_y${previusHead.y}`
		else return `x${previusHead.x - 1}_y${previusHead.y}`
	}

	MovmentRight(previusHead) {
		if (previusHead.x == 11) return `x${0}_y${previusHead.y}`
		else return `x${previusHead.x + 1}_y${previusHead.y}`
	}

	MovmentUp(previusHead) {
		if (previusHead.y == 0) return `x${previusHead.x}_y${11}`
		else return `x${previusHead.x}_y${previusHead.y - 1}`
	}

	MovmentDown(previusHead) {
		if (previusHead.y == 11) return `x${previusHead.x}_y${0}`
		else return `x${previusHead.x}_y${previusHead.y + 1}`
	}

	MovmentWithGrow(direction, grid){
		grid.map(cell => {
			if(cell.snake.roleOfSnake.includes('headOfSnake')){
				this.SnakeEatPosition.push(CellModel(headOfSnake.x, headOfSnake.y))
			}
			//cell.snake.roleOfSnake.push("SnakeFood")
		})
		this.Movment(direction, grid)
	}
}
