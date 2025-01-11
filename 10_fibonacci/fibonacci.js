const fibonacci = function (number) {
	//numberCheck
	if (number < 0) {
		return "OOPS"
	}

	//fibonacci
	const fibonacciArray = []

	let number1 = 0
	let number2 = 1
	fibonacciArray.push(number1, number2)

	for (i = 0; i < number; i++) {
		if (number1 < number2) {
			number1 = number1 + number2
			fibonacciArray.push(number1)
		} else {
			number2 = number1 + number2
			fibonacciArray.push(number2)
		}
	}

	return fibonacciArray[number]
}

// Do not edit below this line
module.exports = fibonacci
