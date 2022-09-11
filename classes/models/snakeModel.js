import { SnakePieceModel } from './snakePieceModel.js'

export class SnakeMovment {
	Snake = []

	constructor(initPosition_x, initPosition_y) {
		this.Snake.push(new SnakePieceModel(initPosition_x, initPosition_y, this.Snake.length))
	}

	Movment(direction) {
		console.log(this.Snake)
        let prevSnakeHead = this.FindPartOfSnakeByRole('headOfSnake')
		switch (direction) {
			case 'left':
				this.MovmentLeft(prevSnakeHead)
				break
			case 'up':
				this.MovmentUp(prevSnakeHead)
				break
			case 'right':
				this.MovmentRight(prevSnakeHead)
				break
			case 'down':
				this.MovmentDown(prevSnakeHead)
				break
		}


		//if the last piece has snakeFood update the length of the snake
		let lastPieceOfSnake = this.FindPartOfSnakeBySnakeLength(0)
		if (lastPieceOfSnake.FindRoleOfSnake('snakeFood')) {
			this.Snake.map(cell => {

				if ((cell.snakeLength == 1)) {
					cell.RemoveRoleOfSnake('queueOfSnake')
					if (!cell.FindRoleOfSnake('headOfSnake')){
                        cell.AddRoleOfSnake('bodyOfSnake')
                    }
				}

				if ((cell.snakeLength == 0)) {
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

		return this.Snake
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
		this.Snake.push(new SnakePieceModel(newIdHeadX, newIdHeadY, this.Snake.length))
        previusHead.RemoveRoleOfSnake("headOfSnake")
        previusHead.RemoveRoleOfSnake("queueOfSnake")
        previusHead.AddRoleOfSnake("bodyOfSnake")
        this.Snake.map(cell => cell.snakeLength--)
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
        this.Snake.push(new SnakePieceModel(newIdHeadX, newIdHeadY, this.Snake.length))
        previusHead.RemoveRoleOfSnake("headOfSnake")
        previusHead.RemoveRoleOfSnake("queueOfSnake")
        previusHead.AddRoleOfSnake("bodyOfSnake")
        this.Snake.map(cell => cell.snakeLength--)
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
        this.Snake.push(new SnakePieceModel(newIdHeadX, newIdHeadY, this.Snake.length))
        previusHead.RemoveRoleOfSnake("headOfSnake")
        previusHead.RemoveRoleOfSnake("queueOfSnake")
        previusHead.AddRoleOfSnake("bodyOfSnake")
        this.Snake.map(cell => cell.snakeLength--)
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
        this.Snake.push(new SnakePieceModel(newIdHeadX, newIdHeadY, this.Snake.length))
        previusHead.RemoveRoleOfSnake("headOfSnake")
        previusHead.RemoveRoleOfSnake("queueOfSnake")
        previusHead.AddRoleOfSnake("bodyOfSnake")
        this.Snake.map(cell => cell.snakeLength--)
	}

    TakeFood(){
        this.Snake.map(cell => {
            if(cell.FindRoleOfSnake("headOfSnake")){
                cell.AddRoleOfSnake("snakeFood")
            }
        })
    }

    //#region Utility
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
    //#endregion

}
