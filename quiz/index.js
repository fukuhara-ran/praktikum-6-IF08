let display = document.getElementById('display');
const button = document.getElementById('mode');
const html = document.querySelector('html');

function append(value) {
    display.value += value;
}

function clearResult() {
    display.value = '';
}

function backspace() {
    display.value = display.value.slice(0, -1);
}

function operate(operator) {
    display.value += ' ' + operator + ' ';
}

function calculate() {
    display.value = eval(display.value);
}

button.addEventListener('click', function () {
    if(html.dataset.colorMode === 'dark'){
        html.dataset.colorMode = 'light';
        this.textContent = 'Light Mode';
    }
    else{
        html.dataset.colorMode = 'dark';
        this.textContent = 'Dark Mode';
    }
  })

function ValidateInput (value) {
	let last_input = input.slice(-1);
	let operators = ["+", "-", "*", "/"];

	if (value == "." && last_input == ".") {
		return false;
	}

	if (operators.includes(value)) {
		if (operators.includes(last_input)) {
			return false;
		} else {
			return true;
		}
	}

	return true;
}