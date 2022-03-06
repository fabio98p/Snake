//sito keydown (https://keycode.info/)
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
class game {
	direction = "left";
	position_x = 4;
	position_y = 4;
	griglia = document.getElementById("griglia");
	div = document.createElement("li");
    Snake = 0
	constructor() {
		this.CreationGame();
        this.Snake = new Snake(this.position_x, this.position_y)
        this.Snake.GetSnakeList()
		this.StartGame();
	}
	CreationGame() {
		for (let y = 0; y < 12; y++) {
			for (let x = 0; x < 12; x++) {
				this.griglia.innerHTML += `<li id="x${x}_y${y}" class="cell cell-x${x} cell-y${y}"></li>`;
			}
		}
	}
	StartGame() {
		setInterval(() => {
            this.snakeposition = this.Snake.Movment(this.direction)
            this.ClearGrid()
            this.snakeposition.forEach(snakePiece => {
                this.SetSnakePiece(snakePiece)
            });
		}, 500);
	}
	Changedirection(direction){
		this.direction = direction
	}
	
	ClearGrid() {
        let allCells = document.getElementsByClassName("cell");
        Array.from(allCells).forEach((cell) => {
            cell.classList.remove("active")
        });
	}
    SetSnakePiece(snakePiece) {
		document.getElementById(`x${snakePiece.pos_x}_y${snakePiece.pos_y}`).classList.add("active");
	}
}
//var b = new Snake()
var a = new game()
document.addEventListener("keydown", (event) => {
	if (event.isComposing || event.keyCode === 87) {
		a.Changedirection("up")
		return;
	}
	if (event.isComposing || event.keyCode === 68) {
		a.Changedirection("right")
		return;
	}
	if (event.isComposing || event.keyCode === 83) {
		a.Changedirection("down")
		return;
	}
	if (event.isComposing || event.keyCode === 65) {
		a.Changedirection("left")
		return;
	}
});
