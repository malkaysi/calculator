function add(a, b) {
	total = a + b;
	return total;
}

function subtract (a, b) {
	total = a - b;
	return total;
}

function multiply(a, b){
	total = a * b;
	return total;
}

function divide(a, b){
	total = a/b;
	return total;
}

function operate(a, operator, b){
	// Need to take an operator and 2 numbers then call a function

	if(operator == '+'){
		total = add(a, b);
	}else if(operator == '-'){
		total = subtract(a, b);
	}else if(operator == '*'){
		total = multiply(a, b);
	}else if(operator == '/'){
		total = divide(a, b);
	}

	return total;
}

const digits = document.querySelectorAll('.digit');
const display = document.querySelector('.display');

let value;

digits.forEach((digit) => {
	digit.addEventListener('click', () => {
		display.innerHTML += digit.innerHTML;
	})
})

console.log(value);


const clear = document.querySelector('.clear');

clear.addEventListener('click', () => {
	display.innerHTML = '';
})

// I don't think we want to keep changing the display.innerHTML
// We should assign the number to a value that we can use