let display = document.getElementById('display');
const lbutton = document.getElementById('lMode');
const dbutton = document.getElementById('dMode');
const html = document.querySelector('html');
const toggleSignButton = document.querySelector('.pm');

toggleSignButton.addEventListener('click', () => {
    if (display.value !== '0') {
      if (display.value.charAt(0) === '-') {
        display.value = display.value.slice(1);
      } else {
        display.value = '-' + display.value;
      }
    }
})

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

lbutton.addEventListener('click', function () {
    if(html.dataset.colorMode === 'dark'){
        html.dataset.colorMode = 'light';
        lbutton.style.opacity = '1';
        dbutton.style.opacity = '0.3';
    }
})
dbutton.addEventListener('click', function () {
    if(html.dataset.colorMode === 'light'){
        html.dataset.colorMode = 'dark';
        dbutton.style.opacity = '1';
        lbutton.style.opacity = '0.3';
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