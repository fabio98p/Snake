//sito keydown (https://keycode.info/)
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function

//var b = new Snake()
var a = new Game()
document.addEventListener('keydown', event => {
	if (event.isComposing || event.keyCode === 87) {
		a.Changedirection('up')
		return
	}
	if (event.isComposing || event.keyCode === 68) {
		a.Changedirection('right')
		return
	}
	if (event.isComposing || event.keyCode === 83) {
		a.Changedirection('down')
		return
	}
	if (event.isComposing || event.keyCode === 65) {
		a.Changedirection('left')
		return
	}
})
