const add = function (number1, number2) {
	return number1 + number2
}

const subtract = function (number1, number2) {
	return number1 - number2
}

const sum = function (randomArray) {
	return randomArray.reduce((total, number) => {
		return (total += number)
	}, 0)
}
const multiply = function (randomArray) {
	return randomArray.reduce((total, number) => {
		return (total *= number)
	}, 1)
}

const power = function (number1, number2) {
	return number1 ** number2
}

const factorial = function (number) {
	let sum = 1
	for (i = 0; i < number; i++) {
		sum *= number - i
	}
	return sum
}

// Do not edit below this line
module.exports = {
	add,
	subtract,
	sum,
	multiply,
	power,
	factorial,
}
