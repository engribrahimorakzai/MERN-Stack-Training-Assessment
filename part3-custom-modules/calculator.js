// calculator.js - Calculator Module (CommonJS)

/**
 * Add two numbers
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} - Sum of a and b
 */
function add(a, b) {
    return a + b;
}

/**
 * Subtract two numbers
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} - Difference of a and b
 */
function subtract(a, b) {
    return a - b;
}

/**
 * Multiply two numbers
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} - Product of a and b
 */
function multiply(a, b) {
    return a * b;
}

/**
 * Divide two numbers
 * @param {number} a - Numerator
 * @param {number} b - Denominator
 * @returns {number} - Quotient of a and b
 * @throws {Error} - If dividing by zero
 */
function divide(a, b) {
    if (b === 0) {
        throw new Error('Division by zero is not allowed');
    }
    return a / b;
}

/**
 * Perform calculation based on operation string
 * @param {string} operation - Operation to perform ('add', 'subtract', 'multiply', 'divide')
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} - Result of the operation
 * @throws {Error} - If operation is invalid
 */
function calculate(operation, a, b) {
    switch (operation.toLowerCase()) {
        case 'add':
            return add(a, b);
        case 'subtract':
            return subtract(a, b);
        case 'multiply':
            return multiply(a, b);
        case 'divide':
            return divide(a, b);
        default:
            throw new Error(`Invalid operation: ${operation}. Valid operations are: add, subtract, multiply, divide`);
    }
}

// Export all functions using module.exports
module.exports = {
    add,
    subtract,
    multiply,
    divide,
    calculate
};
