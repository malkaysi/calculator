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

function operate(firstNum, operator, secondNum) {
	// Need to take an operator and 2 numbers then call a function

	firstNum = parseFloat(firstNum);
	secondNum = parseFloat(secondNum);

	if (operator == '+') {
		total = add(firstNum, secondNum);
	} else if (operator == '-') {
		total = subtract(firstNum, secondNum);
	} else if (operator == 'X') {
		total = multiply(firstNum, secondNum);
	} else if (operator == '/') {
		total = divide(firstNum, secondNum);
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
			firstNum += e.target.innerHTML;
			console.log(typeof firstNum);
			console.log(firstNum)
			display.innerText = firstNum;
			
		} else {
			secondNum += e.target.innerText;
			display.innerText = secondNum;
			
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
		}else if(e.target.innerText == '=' && (firstNum == "" || secondNum == "")){
			alert("Don't ever do that again");
			startOver();
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

