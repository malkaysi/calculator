function add(a, b) {
	total = a + b;
	display.innerText = total;
	return total;
}

function subtract(a, b) {
	total = a - b;
	display.innerText = total;
	return total;
}

function multiply(a, b) {
	total = a * b;
	display.innerText = total;
	return total;
}

function divide(a, b) {
	if(b == 0){
		alert('How dare you');
		startOver();
	} else {
		total = a / b;
		display.innerText = total;
		return total;
	}
	
}

function operate(a, operator, b) {
	// Need to take an operator and 2 numbers then call a function

	if (operator == '+') {
		total = add(a, b);
	} else if (operator == '-') {
		total = subtract(a, b);
	} else if (operator == 'X') {
		total = multiply(a, b);
	} else if (operator == '/') {
		total = divide(a, b);
	}

	return total;
}

const digits = document.querySelectorAll('.digit');
const display = document.querySelector('.display');
const operators = document.querySelectorAll('.operator');

let firstNum = "";
let secondNum = "";
let operator = "";
let calcOperator = "";

display.innerText = '0';


digits.forEach((digit) => {
	digit.addEventListener('click', e => {

		if (operator === "") {
			firstNum += e.target.innerText;
			display.innerText = firstNum;
			firstNum = parseFloat(firstNum);
		} else {
			secondNum += e.target.innerText;
			display.innerText = secondNum;
			secondNum = parseFloat(secondNum);
		}
	})
})

operators.forEach((op) => {
	op.addEventListener('click', e => {

		if (e.target.innerText !== '=') {
			operator = e.target.innerText;
		} else {

			operate(firstNum, operator, secondNum);
		}

	})
})

const clear = document.querySelector('.clear');

clear.addEventListener('click', e => {
	startOver();
})

function startOver(){
	display.innerText = "0";
	firstNum = '';
	secondNum = '';
	operator = '';
	total = 0;
}

