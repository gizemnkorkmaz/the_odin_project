function add (a,b) {
	return a + b
}

function subtract (a,b) {
    return a - b
}

function sum (array) {
    if(array.length == 0) return 0
	return array.reduce((a,b) => a + b)
}

function multiply (array) {
	return array.reduce((a,b) => a * b)
}

function power(a,b) {
	return a ** b
}

function factorial(a) {
    if(a == 0 || a == 1) return 1
	return a * factorial(a-1)
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}