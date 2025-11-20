// asyncFileHandler.js - Demonstrating Different Async Approaches

const fs = require('fs');
const path = require('path');

console.log('\n=== ASYNC FILE HANDLER DEMONSTRATION ===\n');

// ============================================
// APPROACH 1: CALLBACKS
// ============================================

/**
 * Process file using traditional callback pattern
 * @param {string} filename - Name of file to process
 * @param {function} callback - Callback function(error, result)
 */
function processFileCallback(filename, callback) {
    console.log(`[CALLBACK] Starting to process: ${filename}`);
    
    // Step 1: Read file asynchronously
    fs.readFile(filename, 'utf8', (readError, data) => {
        if (readError) {
            return callback(new Error(`Failed to read file: ${readError.message}`));
        }
        
        // Step 2: Convert content to uppercase
        const processedContent = data.toUpperCase();
        
        // Step 3: Create output filename
        const outputFilename = filename.replace(/(\.\w+)$/, '-processed$1');
        
        // Step 4: Write to new file
        fs.writeFile(outputFilename, processedContent, 'utf8', (writeError) => {
            if (writeError) {
                return callback(new Error(`Failed to write file: ${writeError.message}`));
            }
            
            callback(null, `Successfully processed ${filename} → ${outputFilename}`);
        });
    });
}

// ============================================
// APPROACH 2: PROMISES
// ============================================

/**
 * Process file using Promises
 * @param {string} filename - Name of file to process
 * @returns {Promise<string>} - Promise that resolves with success message
 */
function processFilePromise(filename) {
    console.log(`[PROMISE] Starting to process: ${filename}`);
    
    return new Promise((resolve, reject) => {
        // Step 1: Read file
        fs.readFile(filename, 'utf8', (readError, data) => {
            if (readError) {
                reject(new Error(`Failed to read file: ${readError.message}`));
            } else {
                resolve(data);
            }
        });
    })
    .then(data => {
        // Step 2: Convert to uppercase
        const processedContent = data.toUpperCase();
        const outputFilename = filename.replace(/(\.\w+)$/, '-processed-promise$1');
        
        // Step 3: Write file
        return new Promise((resolve, reject) => {
            fs.writeFile(outputFilename, processedContent, 'utf8', (writeError) => {
                if (writeError) {
                    reject(new Error(`Failed to write file: ${writeError.message}`));
                } else {
                    resolve(`Successfully processed ${filename} → ${outputFilename}`);
                }
            });
        });
    });
}

// ============================================
// APPROACH 3: ASYNC/AWAIT
// ============================================

/**
 * Process file using async/await with fs.promises
 * @param {string} filename - Name of file to process
 * @returns {Promise<string>} - Promise that resolves with success message
 */
async function processFileAsync(filename) {
    console.log(`[ASYNC/AWAIT] Starting to process: ${filename}`);
    
    try {
        // Step 1: Read file
        const data = await fs.promises.readFile(filename, 'utf8');
        
        // Step 2: Convert to uppercase
        const processedContent = data.toUpperCase();
        
        // Step 3: Create output filename
        const outputFilename = filename.replace(/(\.\w+)$/, '-processed-async$1');
        
        // Step 4: Write to new file
        await fs.promises.writeFile(outputFilename, processedContent, 'utf8');
        
        return `Successfully processed ${filename} → ${outputFilename}`;
    } catch (error) {
        throw new Error(`Processing failed: ${error.message}`);
    }
}

// ============================================
// DEMONSTRATION
// ============================================

async function runDemonstration() {
    const testFile = path.join(__dirname, 'input.txt');
    
    console.log('--- Testing Callback Approach ---\n');
    
    // Test 1: Callback approach
    processFileCallback(testFile, (error, result) => {
        if (error) {
            console.error(`❌ CALLBACK ERROR: ${error.message}`);
        } else {
            console.log(`✓ CALLBACK SUCCESS: ${result}`);
        }
        console.log('\n');
    });
    
    // Wait a bit for callback to complete before next approach
    await new Promise(resolve => setTimeout(resolve, 100));
    
    console.log('--- Testing Promise Approach ---\n');
    
    // Test 2: Promise approach
    processFilePromise(testFile)
        .then(result => {
            console.log(`✓ PROMISE SUCCESS: ${result}`);
            console.log('\n');
        })
        .catch(error => {
            console.error(`❌ PROMISE ERROR: ${error.message}`);
            console.log('\n');
        });
    
    // Wait a bit for promise to complete before next approach
    await new Promise(resolve => setTimeout(resolve, 100));
    
    console.log('--- Testing Async/Await Approach ---\n');
    
    // Test 3: Async/Await approach
    try {
        const result = await processFileAsync(testFile);
        console.log(`✓ ASYNC/AWAIT SUCCESS: ${result}`);
        console.log('\n');
    } catch (error) {
        console.error(`❌ ASYNC/AWAIT ERROR: ${error.message}`);
        console.log('\n');
    }
    
    // ============================================
    // COMPARISON AND PREFERENCE
    // ============================================
    
    console.log('=== APPROACH COMPARISON ===\n');
    
    console.log('1. CALLBACKS:');
    console.log('   Pros: Traditional, widely understood, no dependencies');
    console.log('   Cons: "Callback hell", nested structure, harder to read');
    console.log('   Use case: Legacy code, simple operations\n');
    
    console.log('2. PROMISES:');
    console.log('   Pros: Chainable, better error handling, avoids nesting');
    console.log('   Cons: Still somewhat verbose, requires .then()/.catch()');
    console.log('   Use case: Modern async operations, API calls\n');
    
    console.log('3. ASYNC/AWAIT:');
    console.log('   Pros: Clean syntax, reads like synchronous code, easy debugging');
    console.log('   Cons: Requires understanding of Promises, needs try/catch');
    console.log('   Use case: Complex async flows, modern applications\n');
    
    console.log('PREFERRED APPROACH: Async/Await');
    console.log('Reason: Most readable and maintainable. Code flows naturally');
    console.log('from top to bottom, error handling is clear with try/catch,');
    console.log('and debugging is straightforward. It\'s the modern standard');
    console.log('for asynchronous JavaScript operations.\n');
    
    console.log('=== DEMONSTRATION COMPLETE ===\n');
}

// Run the demonstration
runDemonstration().catch(error => {
    console.error('Fatal error in demonstration:', error);
});

// Export functions for potential reuse
module.exports = {
    processFileCallback,
    processFilePromise,
    processFileAsync
};
