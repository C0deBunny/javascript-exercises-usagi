const removeFromArray = function (array, ...testedArguments) {
	let args = [...testedArguments]

	args.forEach(filterForEach)

	function filterForEach(value) {
		array = array.filter(removeNumber)

		function removeNumber(number) {
			return number !== value
		}
	}

	return array
}

// Do not edit below this line
module.exports = removeFromArray
