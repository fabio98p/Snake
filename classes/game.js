import { GridModel } from './models/gridModel.js'
import { DomGridModel } from './models/domGridModel.js'

export class Game {
	gamestarted = false
	direction = 'left'
	initPosition_x = 4
	initPosition_y = 4
	dimension_x = 12
	dimension_y = 12
	score = 0
	moves = 0

	gridModel
	domGrid
	constructor() {
		// create logic of grid and initialize the snake
		this.gridModel = new GridModel(this.dimension_x, this.dimension_y)
		this.gridModel.CreateSnake(this.initPosition_x, this.initPosition_y)
		//create grid on dom
		this.domGrid = new DomGridModel(this.gridModel.dimension_x, this.gridModel.dimension_y)
		this.domGrid.UpdateGrid(this.gridModel.gridCells)

		//this.Point = new Point(this.jsonGrid.dimension_x, this.jsonGrid.dimension_y);
		//this.Points.CreateTurtle(this.Snake.GetSnakeList())
	}

	StartGame() {
		if (!this.gamestarted) {
			setInterval(() => {
				this.CounterMoves()
				this.gridModel.SnakeMovmentUpdate(this.direction) //update the snake position on the grid
				this.domGrid.UpdateGrid(this.gridModel.gridCells)
			}, 10)
			this.gamestarted = true
		}
	}

	Changedirection(direction) {
		this.direction = direction
	}
	CounterMoves() {
		document.getElementById('moves').innerHTML = ++this.moves
	}
}
