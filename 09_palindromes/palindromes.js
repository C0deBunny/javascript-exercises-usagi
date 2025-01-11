const palindromes = function (string) {
	string = string.replace(/[.,\/#!@#$%^&*() ]/g, "")
	string = string.toLowerCase()
	if (string == string.split("").reverse().join("")) {
		return true
	} else return false
}

// Do not edit below this line
module.exports = palindromes
