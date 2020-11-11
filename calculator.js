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