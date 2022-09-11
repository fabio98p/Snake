import { CellModel } from './cellModel.js'
import { SnakeMovment } from './snakeModel.js'

export class GridModel {
	dimension_x
	dimension_y
	gridCells = []
	snakeMovment
	constructor(dimension_x, dimension_y) {
		this.dimension_x = dimension_x
		this.dimension_y = dimension_y
		for (let y = 0; y < this.dimension_y; y++) {
			for (let x = 0; x < this.dimension_y; x++) {
				this.gridCells.push(new CellModel(x, y))
			}
		}
		this.snakeMovment = new SnakeMovment()
	}

	CreateSnake(initPosition_x, initPosition_y) {
		this.snakeMovment = new SnakeMovment(initPosition_x, initPosition_y)
        return this.snakeMovment.Snake
	}

	SnakeMovmentUpdate(direction) {
		let snake = this.snakeMovment.Movment(direction)
		this.SetMainRoleOfCell(snake)
	}

	ClearGrid() {
		this.grid.forEach(cell => {
			cell.htmlClass = 'empty'
			cell.snake.snakeLength = null
			cell.snake.partOfSnake = []
			cell.snake.direction = null
		})
	}

	SetMainRoleOfCell(snake) {
		this.gridCells.map(cell => {
            let snakePiece = snake.filter(snakeCell => snakeCell.id == cell.id )[0]
            if (snakePiece) {
                if (snakePiece.FindRoleOfSnake('queueOfSnake')) {
                    cell.UpdateHtmlClass('queueOfSnake')
                } 
                else if(snakePiece.FindRoleOfSnake('headOfSnake')) {
                    cell.UpdateHtmlClass('headOfSnake')
                }
                else if(snakePiece.FindRoleOfSnake('bodyOfSnake')) {
                    if (snakePiece.FindRoleOfSnake('snakeFood')) {
                        cell.UpdateHtmlClass('snakeFood')
                    } 
                    else {
                        cell.UpdateHtmlClass('bodyOfSnake')
                    }
                }
            }
            else{
                cell.UpdateHtmlClass("empty")
            }
		})
	}

	GrowSnake() {
		console.log('snake is growna')
		this.snakeMovment.TakeFood()
	}
}
