class Snake {
	snakelist = []
	position_x = 0
	position_y = 0

	constructor(pos_x, pos_y) {
		this.snakelist.push({
			id: 0,
			pos_x: pos_x,
			pos_y: pos_y,
			type: 'body/head',
			direction: 'vertical/orrizzontal'
		})
	}

	Movment(direction, jsonGrid) {
		let previusHead
		let newIdHead
		let newQueueLength
		jsonGrid.grid.map(cell => {
			if (cell.snake.snakelength) {
				//update position of body
				cell.snake.snakelength--

				//update previus head
				if (cell.snake.partofsnake.includes('headOfSnake')) {
					previusHead = cell
					cell.snake.partofsnake = cell.snake.partofsnake.filter(part => part !== 'headOfSnake')
					cell.snake.partofsnake.push('bodyOfSnake')
					cell.class = 'bodyOfSnake'
				}

				//remove previus queue and find the new queue
				if (cell.snake.partofsnake.includes('queueOfSnake')) {
					newQueueLength = cell.snake.snakelength + 1
					cell = this.RemovePartOfSnake(previusHead)
				}
			}
		})

		switch (direction) {
			case 'left':
				newIdHead = this.MovmentLeft(previusHead)
				break
			case 'up':
				newIdHead = this.MovmentUp(previusHead)
				break
			case 'right':
				newIdHead = this.MovmentRight(previusHead)
				break
			case 'down':
				newIdHead = this.MovmentDown(previusHead)
				break
		}

		jsonGrid.grid.forEach(cell => {
			if (cell.id == newIdHead) {
				cell.snake.partofsnake.push('headOfSnake')
				cell.snake.snakelength = 1
				cell.class = 'headOfSnake'
			}

			//add new queue previus finded
			if (cell.snake.snakelength == newQueueLength) {
				cell.snake.partofsnake = cell.snake.partofsnake.filter(part => part !== 'bodyOfSnake')
				cell.snake.partofsnake.push('queueOfSnake')
				if (!cell.snake.partofsnake.includes('headOfSnake')) {
					cell.class = 'queueOfSnake'
				}
			}
		})

		return jsonGrid
	}
	MovmentLeft(previusHead) {
		//find the new id of head
		if (previusHead.x == 0) return `x${11}_y${previusHead.y}`
		else return `x${previusHead.x - 1}_y${previusHead.y}`
	}

	MovmentRight(previusHead) {
		if (previusHead.x == 11) return `x${0}_y${previusHead.y}`
		else return `x${previusHead.x + 1}_y${previusHead.y}`
	}

	MovmentUp(previusHead) {
		if (previusHead.y == 0) return `x${previusHead.x}_y${11}`
		else return `x${previusHead.x}_y${previusHead.y - 1}`
	}

	MovmentDown(previusHead) {
		if (previusHead.y == 11) return `x${previusHead.x}_y${0}`
		else return `x${previusHead.x}_y${previusHead.y + 1}`
	}

	RemovePartOfSnake(cell) {
		cell.snake.snakelength = null
		cell.snake.partofsnake = []
		cell.snake.direction = null
		cell.class = 'empty'
		return cell
	}
}
