const getTheTitles = function (books) {
	const myBooks = books

	const myNewBooks = myBooks.map((book) => book.title)

	return myNewBooks
}

// Do not edit below this line
module.exports = getTheTitles
