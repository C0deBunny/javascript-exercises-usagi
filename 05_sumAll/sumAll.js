const sumAll = function (start, end) {
	let sum = 0

	if (typeof start !== "number" || typeof end !== "number") return "ERROR"
	if (start < 0 || end < 0) return "ERROR"
	if (start % 1 !== 0 || end % 1 !== 0) return "ERROR"
	if (start < end) {
		for (let i = start; i <= end; i++) {
			sum = sum + i
		}
	} else {
		for (let i = end; i <= start; i++) {
			sum = sum + i
		}
	}

	return sum
}

// Do not edit below this line
module.exports = sumAll
