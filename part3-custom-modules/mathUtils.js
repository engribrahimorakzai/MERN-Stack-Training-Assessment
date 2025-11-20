// mathUtils.js - Math Utilities Module (CommonJS)

/**
 * Check if a number is even
 * @param {number} num - Number to check
 * @returns {boolean} - True if even, false otherwise
 */
function isEven(num) {
    return num % 2 === 0;
}

/**
 * Check if a number is odd
 * @param {number} num - Number to check
 * @returns {boolean} - True if odd, false otherwise
 */
function isOdd(num) {
    return num % 2 !== 0;
}

/**
 * Calculate the square of a number
 * @param {number} num - Number to square
 * @returns {number} - Square of the number
 */
function square(num) {
    return num * num;
}

/**
 * Calculate the cube of a number
 * @param {number} num - Number to cube
 * @returns {number} - Cube of the number
 */
function cube(num) {
    return num * num * num;
}

// Export all functions using module.exports
module.exports = {
    isEven,
    isOdd,
    square,
    cube
};
