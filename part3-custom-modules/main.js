// main.js - Demonstration of CommonJS Modules

// Import both modules
const calculator = require('./calculator');
const mathUtils = require('./mathUtils');

console.log('=== CommonJS Modules Demonstration ===\n');

// ===== CALCULATOR MODULE DEMONSTRATION =====
console.log('--- Calculator Module ---');

// 1. Addition
const sum = calculator.add(15, 25);
console.log(`1. Addition: 15 + 25 = ${sum}`);

// 2. Subtraction
const difference = calculator.subtract(50, 18);
console.log(`2. Subtraction: 50 - 18 = ${difference}`);

// 3. Multiplication
const product = calculator.multiply(7, 8);
console.log(`3. Multiplication: 7 × 8 = ${product}`);

// 4. Division (normal case)
const quotient = calculator.divide(100, 4);
console.log(`4. Division: 100 ÷ 4 = ${quotient}`);

// 5. Calculate function with operation string
const result = calculator.calculate('multiply', 6, 9);
console.log(`5. Calculate (multiply): 6 × 9 = ${result}`);

// 6. Handle division by zero error
console.log('\n6. Testing Division by Zero:');
try {
    calculator.divide(10, 0);
} catch (error) {
    console.log(`   ✓ Error caught: ${error.message}`);
}

// ===== MATH UTILS MODULE DEMONSTRATION =====
console.log('\n--- Math Utils Module ---');

// 1. Check if even
const num1 = 24;
console.log(`1. Is ${num1} even? ${mathUtils.isEven(num1)}`);

// 2. Check if odd
const num2 = 17;
console.log(`2. Is ${num2} odd? ${mathUtils.isOdd(num2)}`);

// 3. Square a number
const num3 = 9;
console.log(`3. Square of ${num3}: ${mathUtils.square(num3)}`);

// 4. Cube a number
const num4 = 5;
console.log(`4. Cube of ${num4}: ${mathUtils.cube(num4)}`);

// ===== COMBINED USAGE =====
console.log('\n--- Combined Usage Example ---');
const baseNumber = 8;
const squaredValue = mathUtils.square(baseNumber);
const isSquaredEven = mathUtils.isEven(squaredValue);
console.log(`Base number: ${baseNumber}`);
console.log(`Squared: ${squaredValue}`);
console.log(`Is squared value even? ${isSquaredEven}`);

const calculatedSum = calculator.add(mathUtils.square(3), mathUtils.cube(2));
console.log(`\nSquare of 3 + Cube of 2 = ${calculatedSum}`);

// ===== ERROR HANDLING DEMONSTRATION =====
console.log('\n--- Error Handling ---');

// Test invalid operation
try {
    calculator.calculate('power', 2, 3);
} catch (error) {
    console.log(`✓ Invalid operation error caught: ${error.message}`);
}

// Test division by zero using calculate function
try {
    calculator.calculate('divide', 100, 0);
} catch (error) {
    console.log(`✓ Division by zero error caught: ${error.message}`);
}

console.log('\n=== Demonstration Complete ===');
