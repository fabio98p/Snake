import {CellModel} from './cellModel.js';
import {SnakeMovment} from './snakeMovment.js';

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
	}

	ClearGrid() {
		this.grid.forEach(cell => {
			cell.htmlClass = 'empty'
			cell.snake.snakeLength = null
			cell.snake.partOfSnake = []
			cell.snake.direction = null
		})
	}
}
