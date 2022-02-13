var direction = "left";
var a = 0;
var position_x = 0;
var position_y = 0;
let griglia = document.getElementById("griglia");
let div = document.createElement("li");
CreationGame();

setInterval(() => {
	Update();
}, 1000);
function MovmentLeft() {
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
function MovmentRight() {
	if (position_x == 0) {
		getposition().classList.remove("active");
		position_x = 11;
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
		position_y++;
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
function CreationGame() {
	for (let x = 0; x < 12; x++) {
		for (let y = 0; y < 12; y++) {
			griglia.innerHTML += `<li id="c${x}_r${y}" class="box box-x${x} box-y${y}"></li>`;
		}
	}
}
function Update() {
	switch (direction) {
		case "left":
			MovmentLeft(direction);
			break;
		case "top":
			MovmentUp(direction);
			break;
		case "right":
			MovmentRight(direction);
			break;
		case "bottom":
			MovmentDown(direction);
			break;
		default:
			break;
	}
}
function getposition() {
	return document.getElementById(`c${position_x}_r${position_y}`);
}
// if (axes == ((direction)? 0: 11)) {
//     getposition().classList.remove("active")
//     position_x = (axes)? 0: 11
//     getposition().classList.add("active")
// } else {
//     getposition().classList.remove("active")
//     console.log("else");
//     position_x++
//     getposition().classList.add("active")
// }
