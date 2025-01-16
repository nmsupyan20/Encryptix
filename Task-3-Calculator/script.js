const displayScreen = document.querySelector('.display-screen');
const buttons = document.querySelectorAll('button');

let expression = '';

function updateScreen(value) {
    displayScreen.value = value;
}

function clearAll() {
    expression = '';
    updateScreen('');
}

function calculate() {
    try {
        const result = eval(expression);
        expression = result.toString();
        updateScreen(expression);
    } catch (error) {
        updateScreen('Error');
    }
}

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.getAttribute('data-value');

        if (button.classList.contains('numpad') || button.classList.contains('operator')) {
            expression += value;
            updateScreen(expression);
        } else if (button.classList.contains('equal')) {
            calculate();
        } else if (button.classList.contains('clear')) {
            clearAll();
        }
    });
});
