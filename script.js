// Get the result input element
const result = document.getElementById('result');

// Function to append a character to the display
function appendCharacter(character) {
    result.value += character;
}

// Function to calculate the result
function calculate() {
    try {
        result.value = eval(result.value);
    } catch (error) {
        result.value = "Error";
    }
}

// Function to clear the display
function clearDisplay() {
    result.value = '';
}

// Function to remove the last character from the display
function backspace() {
    result.value = result.value.slice(0, -1);
}

// Function to calculate the percentage
function percentage() {
    result.value = eval(result.value) / 100;
}

// Function to calculate the square root
function squareRoot() {
    result.value = Math.sqrt(eval(result.value));
}

// Add event listeners to buttons
const buttons = document.querySelectorAll('#buttons button');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        if (value === '=') {
            calculate();
        } else if (value === 'C') {
            clearDisplay();
        } else if (value === '←') {
            backspace();
        } else if (value === '%') {
            percentage();
        } else if (value === '√') {
            squareRoot();
        } else {
            appendCharacter(value);
        }
    });
});
