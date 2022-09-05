import { CellModel } from './cellModel.js'
import { SnakeMovment } from './snakeMovment.js'

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
		const initialPositionCell = this.gridCells.filter(cell => {
			return cell.x === initPosition_x && cell.y === initPosition_y
		})[0]
		initialPositionCell.UpdateHtmlClass('headOfSnake')
		initialPositionCell.snake.CreateSnake()
	}

	SnakeMovmentUpdate(direction) {
		this.gridCells = this.snakeMovment.Movment(direction, this.gridCells)
		this.gridCells = this.SetMainRoleOfCell(gridCells)
	}

	ClearGrid() {
		this.grid.forEach(cell => {
			cell.htmlClass = 'empty'
			cell.snake.snakeLength = null
			cell.snake.partOfSnake = []
			cell.snake.direction = null
		})
	}

	SetMainRoleOfCell(grid) {
		grid.map(cell => {
			if (cell.snake.roleOfSnake.FindRoleOfSnake('queueOfSnake')) {
				cell.UpdateHtmlClass('queueOfSnake')
			} 
			else if(cell.snake.roleOfSnake.FindRoleOfSnake('headOfSnake')) {
				cell.UpdateHtmlClass('headOfSnake')
			}
			else if(cell.snake.roleOfSnake.FindRoleOfSnake('bodyOfSnake')) {
				if (cell.snake.roleOfSnake.FindRoleOfSnake('snakeFood')) {
					cell.UpdateHtmlClass('snakeFood')
				} 
				else {
					cell.UpdateHtmlClass('bodyOfSnake')
				}
			}
			else{
				cell.UpdateHtmlClass("empty")
			}
		})
	}

	GrowSnake() {
		console.log('snake is growna')
		this.SnakeMovment.MovmentWithGrow()
	}
}
