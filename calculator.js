function add(a, b) {
	total = a + b;
	// display.innerText = total;
	return total;
}

function subtract(a, b) {
	total = a - b;
	// display.innerText = total;
	return total;
}

function multiply(a, b) {
	total = a * b;
	// display.innerText = total;
	return total;
}

function divide(a, b) {
	if(b == 0){
		alert('How dare you');
		startOver();
	} else {
		total = a / b;
		// display.innerText = total;
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

	if(Number.isInteger(total)){
		display.innerText = total;
		
	} else {
		total = total.toFixed(2);
		display.innerText = total;
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
let total = "";

display.innerText = '0';


digits.forEach((digit) => {
	digit.addEventListener('click', e => {

		if (operator === "" && total == "") { // The very beginning, everything is reset and we need the first number
			firstNum += e.target.innerText;
			console.log(firstNum)
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

		if (e.target.innerText !== '=' && secondNum == "") {
			operator = e.target.innerText;
		} else if(e.target.innerText !== '=' && secondNum !== ""){
			clearSecondNum();
			operator = e.target.innerText;
		} else if(e.target.innerText == '=') {
			operate(firstNum, operator, secondNum);
			startOver();
		}

	})
})

const clear = document.querySelector('.clear');

clear.addEventListener('click', e => {
	display.innerText = "0";
	startOver();
})

function startOver(){
	
	firstNum = '';
	secondNum = '';
	operator = '';
	total = "";
}

function clearSecondNum(){
	operate(firstNum, operator, secondNum);
	firstNum = total;
	secondNum = "";
	operator = "";
}

