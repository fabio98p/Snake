class Game {
	direction = "left";
	position_x = 4;
	position_y = 4;
	htmlGrid = document.getElementById("grid");
	jsonGrid = {
		dimension_x: 12,
		dimension_y: 12,
		grid: []
	};
	div = document.createElement("li");
	Snake = 0;
	score = 0;
	moves = 0;
	constructor() {
		this.CreationGame();
		this.CounterMoves();
		this.Snake = new Snake(this.position_x, this.position_y);
		//this.Point = new Point(this.jsonGrid.dimension_x, this.jsonGrid.dimension_y);
		//this.Points.CreateTurtle(this.Snake.GetSnakeList())
	}
	CreationGame() {
		for (let y = 0; y < this.jsonGrid.dimension_y; y++) {
			for (let x = 0; x < this.jsonGrid.dimension_y; x++) {
				this.htmlGrid.innerHTML += `<li id="x${x}_y${y}" class="cell cell-x${x} cell-y${y}"></li>`;
				this.jsonGrid.grid.push({ //sistemare la cosa
					id: String(x)+String(y),
					x: x,
					y: y,
					type: "empty",
					path: "",
				})
			}
		}
	}
	StartGame() {
		setInterval(() => {
			this.CounterMoves();
			this.snakeposition = this.Snake.Movment(this.direction);
			this.ClearGrid();
			this.snakeposition.forEach((snakePiece) => {
				this.SetSnakePiece(snakePiece);
			});
		}, 100);
	}
	Changedirection(direction) {
		this.direction = direction;
	}
	ClearGrid() {
		let allCells = document.getElementsByClassName("cell");
		Array.from(allCells).forEach((cell) => {
			cell.classList.remove("active");
		});
	}
	SetSnakePiece(snakePiece) {
		document.getElementById(`x${snakePiece.pos_x}_y${snakePiece.pos_y}`).classList.add("active");
	}
	CounterMoves() {
		document.getElementById("moves").innerHTML = ++this.moves;
	}
}
