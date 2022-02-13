//sito keydown (https://keycode.info/)
var direction = "down";
var position_x = 0;
var position_y = 0;
let griglia = document.getElementById("griglia");
let div = document.createElement("li");

function CreationGame() {
	for (let y = 0; y < 12; y++) {
		for (let x = 0; x < 12; x++) {
			griglia.innerHTML += `<li id="x${x}_y${y}" class="box box-x${x} box-y${y}"></li>`;
		}
	}
}
CreationGame();

setInterval(() => {
	Comand();
	Update();
}, 500);
function Comand() {
console.log(position_x, position_y, direction)
}
function MovmentLeft() {
	if (position_x == 0) {
		getposition().classList.remove("active");
		position_x = 11;
		getposition().classList.add("active");
	} else {
		getposition().classList.remove("active");
		position_x--;
		getposition().classList.add("active");
	}
}
function MovmentRight() {
	if (position_x == 11) {
		getposition().classList.remove("active");
		position_x = 0;
		getposition().classList.add("active");
	} else {
		getposition().classList.remove("active");
		position_x++;
		getposition().classList.add("active");
	}
}
function MovmentUp() {
	if (position_y == 0) {
		getposition().classList.remove("active");
		position_y = 11;
		getposition().classList.add("active");
	} else {
		getposition().classList.remove("active");
		position_y--;
		getposition().classList.add("active");
	}
}
function MovmentDown() {
	if (position_y == 11) {
		getposition().classList.remove("active");
		position_y = 0;
		getposition().classList.add("active");
	} else {
		getposition().classList.remove("active");
		position_y++;
		getposition().classList.add("active");
	}
}
function Update() {
	switch (direction) {
		case "left":
			MovmentLeft(direction);
			break;
		case "up":
			MovmentUp(direction);
			break;
		case "right":
			MovmentRight(direction);
			break;
		case "down":
			MovmentDown(direction);
			break;
		default:
			break;
	}
}
function getposition() {
	return document.getElementById(`x${position_x}_y${position_y}`);
}
document.addEventListener("keydown", (event) => {
	console.log("keydown");
	if (event.isComposing || event.keyCode === 87) {
		direction = "up";
		return;
	}
	if (event.isComposing || event.keyCode === 68) {
		direction = "right";
		return;
	}
	if (event.isComposing || event.keyCode === 83) {
		direction = "down";
		return;
	}
	if (event.isComposing || event.keyCode === 65) {
		direction = "left";
		return;
	}
});