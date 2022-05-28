/// todo: implementare il cambiamento di cose nella classe domgridmodel
class Game {
	gamestarted = false
	direction = 'left'
	initPosition_x = 4
	initPosition_y = 4
	htmlGrid = document.getElementById('grid')
	gridModel = new GridModel(12, 12)
	div = document.createElement('li')
	Snake = 0
	score = 0
	moves = 0
	constructor() {
		this.grid.CreateGrid(this.htmlGrid)
        this.grid.CreateSnake()
		this.CounterMoves()
		this.Snake = new Snake(this.position_x, this.position_y)
		//this.Point = new Point(this.jsonGrid.dimension_x, this.jsonGrid.dimension_y);
		//this.Points.CreateTurtle(this.Snake.GetSnakeList())
	}
	CreationGame() {
		for (let y = 0; y < this.jsonGrid.dimension_y; y++) {
			for (let x = 0; x < this.jsonGrid.dimension_y; x++) {
				this.htmlGrid.innerHTML += `<li id="x${x}_y${y}" class="cell cell-x${x} cell-y${y}"></li>`
			}
		}
		// set the initial position of the snake (headOfSnake)
		let initialPosition = this.jsonGrid.grid.filter(x => x.x == this.initPosition_x && x.y == this.initPosition_y)[0]
		initialPosition.class = 'headOfSnake'
		initialPosition.snake.partofsnake.push('headOfSnake')
		initialPosition.snake.partofsnake.push('queueOfSnake')
		initialPosition.snake.snakelength = 1
		this.UpdateGrid(this.jsonGrid)
	}

	StartGame() {
		if (!this.gamestarted) {
			setInterval(() => {
				this.CounterMoves()
				this.jsonGrid = this.Snake.Movment(this.direction, this.jsonGrid) //update the snake position on the grid
				this.ClearGrid()
				this.UpdateGrid(this.jsonGrid)
			}, 100)
			this.gamestarted = true
		}
	}

	UpdateGrid(jsonGrid) {
		jsonGrid.grid.forEach(cell => {
			document.getElementById(`${cell.id}`).classList.add(`${cell.class}`)
		})
	}

	ClearGrid() {
		let allCells = document.getElementsByClassName('cell')
		Array.from(allCells).forEach(cell => {
			cell.classList.remove('active', 'headOfSnake', 'bodyOfSnake', 'queueOfSnake', 'empty')
		})
	}

	Changedirection(direction) {
		this.direction = direction
	}
	CounterMoves() {
		document.getElementById('moves').innerHTML = ++this.moves
	}
}
