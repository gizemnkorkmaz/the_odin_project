const buttons = document.querySelectorAll('button')
const numbers = document.querySelectorAll('.numbers')
const operators = document.querySelectorAll('.operators')
const display = document.querySelector('.display')
const allClear = document.querySelector('#allclear')

let num1 = null
let num2 = null
let currentOperator = null
let buffer

function displayValue(value) {
    display.textContent += value
}


function handleNumber(number){
        num1 = number.value
        display.innerHTML += num1
}

function handleOperator(operator) {
    currentOperator = operator.id
    display.innerHTML += ''
}

function add(num1, num2) {
    return parseInt(num1) + parseInt(num2)
}
function subtract(num1, num2) {
    return parseInt(num1) - parseInt(num2)
}
function multiply(num1, num2) {
    return parseInt(num1) * parseInt(num2)
}
function divide(num1, num2) {
    return parseInt(num1) / parseInt(num2)
}


function clearAll(){
    num1 = ''
    num2 = ''
    currentOperator = ''
    display.innerHTML = "0"
}

function operate(currentOperator, num1, num2) {
    switch(currentOperator) {
        case "add":
            return add(num1, num2);
          case "subtract":
            return subtract(num1, num2);
          case "multiply":
            return multiply(num1, num2);
          case "divide":
            if (num2 === 0) return null;
            else return divide(num1, num2);
          default:
            return null;
    }
}


//eventListeners
allClear.addEventListener('click', () => clearAll())

numbers.forEach(number => {
    number.addEventListener('click', () => findNumbers(number))
})

operators.forEach(operator => {
    operator.addEventListener('click', () => findOperator(operator))
})