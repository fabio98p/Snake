var direction = "left"
var a = 0
var position_x = 0
var position_y = 0
let griglia = document.getElementById("griglia")
let div = document.createElement("li")
for (let x = 0; x < 12 ; x++) {
    for (let y = 0; y < 12; y++) {
        griglia.innerHTML += `<li id="c${x}_r${y}" class="box box-x${x} box-y${y}"></li>`
    }
}
setInterval(() => {
    switch (direction) {
        case "left":
            movment("x", false)
            break;
        case "top":
            movment("y", true)
            break;
        case "right":
            movment("x", true)
            break;
        case "bottom":
            movment("y", false)
            break;
        default:
            break;
    }
}, 1000);
function movment(direction, axes){
    //console.log("dir",(direction == "x")?position_x:position_y);
    //console.log("axes",((axes)? 0: 11));
    //console.log(((direction == "x")?position_x:position_y) == ((axes)? 0: 11));
    if (((direction == "x")?position_x:position_y) == ((axes)? 0: 11)) {
        
    } else {
        //console.log((axes)?a+1:a-1);
        
        ((direction == "x")?position_x:position_y) = ((axes)?(((direction == "x")?position_x:position_y)+1):(((direction == "x")?position_x:position_y)-1)) 
        console.log(a, position_y, position_x);
        console.log(getposition());

    }
}
function getposition(){
    return document.getElementById(`c${position_x}_r${position_y}`)
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