// errorHandlingTest.js - Testing error handling in async operations

const { processFileCallback, processFilePromise, processFileAsync } = require('./asyncFileHandler');

console.log('\n=== ERROR HANDLING TEST ===\n');
console.log('Testing with non-existent file...\n');

const nonExistentFile = 'does-not-exist.txt';

// Test 1: Callback error handling
console.log('1. Testing Callback Error Handling:');
processFileCallback(nonExistentFile, (error, result) => {
    if (error) {
        console.log(`   ✓ Error caught: ${error.message}\n`);
    } else {
        console.log(`   Result: ${result}\n`);
    }
});

// Test 2: Promise error handling
setTimeout(() => {
    console.log('2. Testing Promise Error Handling:');
    processFilePromise(nonExistentFile)
        .then(result => console.log(`   Result: ${result}\n`))
        .catch(error => console.log(`   ✓ Error caught: ${error.message}\n`));
}, 100);

// Test 3: Async/Await error handling
setTimeout(async () => {
    console.log('3. Testing Async/Await Error Handling:');
    try {
        const result = await processFileAsync(nonExistentFile);
        console.log(`   Result: ${result}\n`);
    } catch (error) {
        console.log(`   ✓ Error caught: ${error.message}\n`);
    }
    
    console.log('=== ERROR HANDLING TEST COMPLETE ===\n');
}, 200);
