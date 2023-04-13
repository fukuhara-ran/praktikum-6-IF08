let display = document.getElementById('display');

function addToDisplay(val) {
    display.value += val;
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}

function clearDisplay() {
    display.value = '';
}
