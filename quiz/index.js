let display = document.getElementById('display');

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
