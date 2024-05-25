document.addEventListener('DOMContentLoaded', function() {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.btn');
    let currentInput = '';
    let operator = '';
    let firstOperand = '';

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.textContent;

            if (!isNaN(value)) {
                currentInput += value;
                display.textContent = currentInput;
            } else if (value === 'X' || value === '/' || value === '+' || value === '-') {
                if (currentInput === '') return;
                operator = value;
                firstOperand = currentInput;
                currentInput = '';
            } else if (value === '=') {
                const secondOperand = currentInput;
                if (firstOperand && operator && secondOperand) {
                    let result;
                    switch (operator) {
                        case 'X':
                            result = parseFloat(firstOperand) * parseFloat(secondOperand);
                            break;
                        case '/':
                            result = parseFloat(firstOperand) / parseFloat(secondOperand);
                            break;
                        case '+':
                            result = parseFloat(firstOperand) + parseFloat(secondOperand);
                            break;
                        case '-':
                            result = parseFloat(firstOperand) - parseFloat(secondOperand);
                            break;
                    }
                    display.textContent = result;
                    currentInput = '';
                    operator = '';
                    firstOperand = '';
                }
            } else if (value === 'Del') {
                currentInput = currentInput.slice(0, -1);
                display.textContent = currentInput;
            }
        });
    });
});
