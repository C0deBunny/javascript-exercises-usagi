const repeatString = function (string, num) {
	let placeholder = string
	for (let i = 1; i < num; i++) {
		string += placeholder
	}
	if (num == 0) {
		string = ``
	} else if (num < 0) {
		string = `ERROR`
	}
	return string
}

repeatString(`hey`, 3)
// Do not edit below this line
module.exports = repeatString
