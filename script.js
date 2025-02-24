function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;
}

function calculate() {
    const display = document.getElementById('display');
    const expression = display.value;
    
    // This will replace the result of any mathematical operation with "I love you"
    if (expression.match(/[0-9]+[+\-*/][0-9]+/)) {
        display.value = 'I love you';
    if (expression.match(/[1]+[+][1]+/))
            display.value = 'I love you Aurel';
    if (expression.match(/[29]+[+][23]+/))
            display.value = 'We Are Forever Okaay?';
    } else {
        try {
            display.value = eval(expression);
        } catch {
            display.value = 'Error';
        }
    }
}

function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '';
}
