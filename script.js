const userInput = document.getElementById("user-input");
const result = document.getElementById("result");
const buttons = document.querySelectorAll(".buttons button");

let currentValue = "0";
let storedValue = null;
let operator = null;

function updateDisplay() {
    userInput.textContent = currentValue;
}

function clearCalculator() {
    currentValue = "0";
    storedValue = null;
    operator = null;
    updateDisplay();
}

function handleNumberClick(number) {
    if (currentValue === "0" || operator !== null) {
        currentValue = number;
    } else {
        currentValue += number;
    }
    updateDisplay();
}

function handleOperatorClick(op) {
    if (operator === null) {
        storedValue = parseFloat(currentValue);
        operator = op;
        currentValue = "0";
    } else {
        calculate();
        operator = op;
    }
}

function calculate() {
    const value1 = storedValue;
    const value2 = currentValue;

    if (operator === "+") {
        currentValue = (value1 + value2).toString();
    } else if (operator === "-") {
        currentValue = (value1 - value2).toString();
    } else if (operator === "x") {
        currentValue = (value1 * value2).toString();
    } else if (operator === "÷") {
        currentValue = (value1 / value2).toString();
    }

    storedValue = null;
    operator = null;
}

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const buttonText = button.textContent;

        if (!isNaN(parseInt(buttonText))) {
            handleNumberClick(buttonText);
        } else if (buttonText === "C") {
            clearCalculator();
        } else if (buttonText === "=") {
            calculate();
            updateDisplay();
        } else {
            handleOperatorClick(buttonText);
        }
    });
});
