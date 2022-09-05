import { CellModel } from "./cellModel.js"

export class SnakeMovment {
	SnakeEatPosition = []
	constructor() {}
	Movment(direction, grid) {
		let snakeLengthNextRound = false
		let previusHeadCell
		let newIdHead
		let newQueueLength
		grid.map(cell => {
			//if there is a food in a snake add the snakefood role
			this.SnakeEatPosition.map(cellSnakeEat =>{
				if(cell.id == cellSnakeEat.id && cell.FindRoleOfSnake("queueOfSnake")){
					//todo: cambiare questo modo di rimuovere le cose e trovarne uno piu carino
					const index = this.SnakeEatPosition.indexOf(`${cellSnakeEat}`)
					if (index > -1) {
						this.roleOfSnake.splice(index, 1)
					}
					//qua mettere il fatto che si allunghi la coda
					//percio cambiare per tutto lo snake la lenght i role e tutte le cose del caso
				}
				if (cell.id == cellSnakeEat.id) {
					cell.AddRoleOfSnake("snakeFood")
				}
				else{
					cell.snake.RemoveRoleOfSnake("snakeFood")
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
				}

				//remove previus queue and find the new queue
				if (cell.snake.roleOfSnake.includes('queueOfSnake')) {
					if(cell.snake.roleOfSnake.includes('snakeFood')){
						snakeLengthNextRound = true
					}
					newQueueLength = cell.snake.SnakeLength() + 1
					cell.snake.RemovePartOfSnake()
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
			}
			//add new queue previus finded
			if (cell.snake.snakeLength == newQueueLength) {
				cell.snake.SetQueueOfSnake()
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
			//cell.snake.AddRoleOfSnake("SnakeFood")
		})
		this.Movment(direction, grid)
	}
}
