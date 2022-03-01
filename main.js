//sito keydown (https://keycode.info/)
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
class snake {
	direction = "left";
	position_x = 4;
	position_y = 4;
	griglia = document.getElementById("griglia");
	div = document.createElement("li");
	constructor() {
		this.CreationGame();
		this.StartGame();
	}
	CreationGame() {
		for (let y = 0; y < 12; y++) {
			for (let x = 0; x < 12; x++) {
				this.griglia.innerHTML += `<li id="x${x}_y${y}" class="box box-x${x} box-y${y}"></li>`;
			}
		}
	}
	StartGame() {
		setInterval(() => {

			this.Update();
		}, 500);
	}
	Changedirection(direction){
		this.direction = direction
	}
	MovmentLeft() {
		if (this.position_x == 0) {
			this.getposition().classList.remove("active");
			this.position_x = 11;
			this.getposition().classList.add("active");
		} else {
			this.getposition().classList.remove("active");
			this.position_x--;
			this.getposition().classList.add("active");
		}
	}
	MovmentRight() {
		if (this.position_x == 11) {
			this.getposition().classList.remove("active");
			this.position_x = 0;
			this.getposition().classList.add("active");
		} else {
			this.getposition().classList.remove("active");
			this.position_x++;
			this.getposition().classList.add("active");
		}
	}
	MovmentUp() {
		if (this.position_y == 0) {
			this.getposition().classList.remove("active");
			this.position_y = 11;
			this.getposition().classList.add("active");
		} else {
			this.getposition().classList.remove("active");
			this.position_y--;
			this.getposition().classList.add("active");
		}
	}
	MovmentDown() {
		if (this.position_y == 11) {
			this.getposition().classList.remove("active");
			this.position_y = 0;
			this.getposition().classList.add("active");
		} else {
			this.getposition().classList.remove("active");
			this.position_y++;
			this.getposition().classList.add("active");
		}
	}
	Update() {
		switch (this.direction) {
			case "left":
				this.MovmentLeft(this.direction);
				break;
			case "up":
				this.MovmentUp(this.direction);
				break;
			case "right":
				this.MovmentRight(this.direction);
				break;
			case "down":
				this.MovmentDown(this.direction);
				break;
			default:
				break;
		}
	}
	getposition() {
		return document.getElementById(`x${this.position_x}_y${this.position_y}`);
	}
}
var a = new snake()
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
