import { CellModel } from './cellModel.js'
import { SnakePieceModel } from './snakePieceModel.js'

export class SnakeMovment {
	// SnakeFoodPosition = []
	Snake = [] // todo: impklementare questo

	constructor(initPosition_x, initPosition_y) {
		this.Snake.push(new SnakePieceModel(initPosition_x, initPosition_y, Snake.length))
	}

	Movment(direction) {
		console.log(Snake)

		switch (direction) {
			case 'left':
				newIdHead = this.MovmentLeft(Snake.FindPartOfSnakeByRole('headOfSnake'))
				break
			case 'up':
				newIdHead = this.MovmentUp(Snake.FindPartOfSnakeByRole('headOfSnake'))
				break
			case 'right':
				newIdHead = this.MovmentRight(Snake.FindPartOfSnakeByRole('headOfSnake'))
				break
			case 'down':
				newIdHead = this.MovmentDown(Snake.FindPartOfSnakeByRole('headOfSnake'))
				break
		}


		//if the last piece has snakeFood update the length of the snake
		let lastPieceOfSnake = this.FindPartOfSnakeBySnakeLength(0)
		if (lastPieceOfSnake.FindRoleOfSnake('snakeFood')) {
			this.Snake.map(cell => {

				if ((cell.snakeLenght = 1)) {
					cell.RemoveRoleOfSnake('queueOfSnake')
					if (!cell.FindRoleOfSnake('headOfSnake')){
                        cell.AddRoleOfSnake('bodyOfSnake')
                    }
				}

				if ((cell.snakeLenght = 0)) {
					if (!cell.FindRoleOfSnake('queueOfSnake')){
                        cell.AddRoleOfSnake('queueOfSnake')
                    }

					cell.RemoveRoleOfSnake('bodyOfSnake')
					cell.RemoveRoleOfSnake('headOfSnake')
					cell.RemoveRoleOfSnake('snakeFood')
				}

				cell.snakeLength++
			})
		}
        else{
            this.RemovePartOfSnake(lastPieceOfSnake)
            let queueOfSnake = this.FindPartOfSnakeBySnakeLength(1)
            if (!queueOfSnake.FindRoleOfSnake("queueOfSnake")){
                queueOfSnake.AddRoleOfSnake("queueOfSnake")
                queueOfSnake.RemoveRoleOfSnake("bodyOfSnake")
                queueOfSnake.RemoveRoleOfSnake("headOfSnake")
            }
        }

		return this.FindPartOfSnakeByRole('queueOfSnake')
	}

	MovmentLeft(previusHead) {
		let newIdHeadX
		let newIdHeadY
		//find the new id of head
		if (previusHead.x == 0) {
			newIdHeadX = 11
			newIdHeadY = previusHead.y
		} else {
			newIdHeadX = previusHead.x - 1
			newIdHeadY = previusHead.y
		}
		this.Snake.push(new SnakePieceModel(newIdHeadX, newIdHeadY, Snake.length))
        previusHead.RemoveRoleOfSnake("headOfSnake")
        previusHead.RemoveRoleOfSnake("queueOfSnake")
        previusHead.AddRoleOfSnake("bodyOfSnake")
	}

	MovmentRight(previusHead) {
        let newIdHeadX
		let newIdHeadY
		if (previusHead.x == 11){
            newIdHeadX = 0
            newIdHeadY = previusHead.y
        }
		else{
            newIdHeadX = previusHead.x + 1
            newIdHeadY = previusHead.y
        }
        this.Snake.push(new SnakePieceModel(newIdHeadX, newIdHeadY, Snake.length))
        previusHead.RemoveRoleOfSnake("headOfSnake")
        previusHead.RemoveRoleOfSnake("queueOfSnake")
        previusHead.AddRoleOfSnake("bodyOfSnake")
	}

	MovmentUp(previusHead) {
        let newIdHeadX
		let newIdHeadY
		if (previusHead.y == 0){
            newIdHeadX = previusHead.x
            newIdHeadY = 11
        }
		else{
            newIdHeadX = previusHead.x
            newIdHeadY = previusHead.y - 1
        }
        this.Snake.push(new SnakePieceModel(newIdHeadX, newIdHeadY, Snake.length))
        previusHead.RemoveRoleOfSnake("headOfSnake")
        previusHead.RemoveRoleOfSnake("queueOfSnake")
        previusHead.AddRoleOfSnake("bodyOfSnake")
	}

	MovmentDown(previusHead) {
        let newIdHeadX
		let newIdHeadY
		if (previusHead.y == 11){
            newIdHeadX = previusHead.x
            newIdHeadY = 0
        }
		else{
            newIdHeadX = previusHead.x
            newIdHeadY = previusHead.y + 1
        }
        this.Snake.push(new SnakePieceModel(newIdHeadX, newIdHeadY, Snake.length))
        previusHead.RemoveRoleOfSnake("headOfSnake")
        previusHead.RemoveRoleOfSnake("queueOfSnake")
        previusHead.AddRoleOfSnake("bodyOfSnake")
	}

	// MovmentWithGrow(direction, grid) {
	// 	grid.map(cell => {
	// 		if (cell.snake.roleOfSnake.includes('headOfSnake')) {
	// 			this.SnakeFoodPosition.push(CellModel(headOfSnake.x, headOfSnake.y))
	// 		}
	// 		//cell.snake.AddRoleOfSnake("SnakeFood")
	// 	})
	// 	this.Movment(direction, grid)
	// }

	RemovePartOfSnake(cellToRemove) {
		this.Snake = this.Snake.filter(cell => cell !== cellToRemove)
	}

	AddPartOfSnake(cellToAdd) {
		if (!this.FindPartOfSnake(cellToAdd)) {
			return this.Snake.push(cellToAdd)
		}
		return false
	}

	FindPartOfSnake(cellToFind) {
		return this.Snake.includes(cellToFind)
	}

	FindPartOfSnakeByRole(roleToFind) {
		return this.Snake.filter(cell => cell.FindRoleOfSnake(roleToFind))[0]
	}

	FindPartOfSnakeBySnakeLength(snakeLength) {
		return this.Snake.filter(cell => cell.snakeLength == snakeLength)[0]
	}

    TakeFood(){
        this.Snake.map(cell => {
            if(cell.FindRoleOfSnake("headOfSnake")){
                cell.AddPartOfSnake("snakeFood")
            }
        })
    }
}
