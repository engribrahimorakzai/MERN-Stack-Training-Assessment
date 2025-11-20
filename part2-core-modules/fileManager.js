// fileManager.js - File System Operations

const fs = require('fs');
const path = require('path');

// Function 1: Create log file with initial timestamp (Synchronous)
function createLogFile() {
    try {
        const timestamp = new Date().toISOString();
        const message = `Assessment started at ${timestamp}\n`;
        fs.writeFileSync('activity.log', message, 'utf8');
        console.log('✓ Log file created successfully');
    } catch (error) {
        console.error('Error creating log file:', error.message);
    }
}

// Function 2: Append log entry with timestamp (Asynchronous)
function appendLog(message) {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] ${message}\n`;
    
    fs.appendFile('activity.log', logEntry, 'utf8', (error) => {
        if (error) {
            console.error('Error appending to log:', error.message);
        } else {
            console.log('✓ Log entry added:', message);
        }
    });
}

// Function 3: Read and display all logs (Asynchronous)
function readLogs() {
    fs.readFile('activity.log', 'utf8', (error, data) => {
        if (error) {
            console.error('Error reading logs:', error.message);
        } else {
            console.log('\n=== Activity Logs ===');
            console.log(data);
            console.log('===================\n');
        }
    });
}

// Function 4: Create directory if it doesn't exist (Synchronous)
function createDirectory() {
    const dirName = 'data';
    
    try {
        if (!fs.existsSync(dirName)) {
            fs.mkdirSync(dirName);
            console.log(`✓ Directory '${dirName}' created successfully`);
        } else {
            console.log(`✓ Directory '${dirName}' already exists`);
        }
    } catch (error) {
        console.error('Error creating directory:', error.message);
    }
}

// Function 5: List all files in current directory (Asynchronous)
function listFiles() {
    fs.readdir('.', (error, files) => {
        if (error) {
            console.error('Error listing files:', error.message);
        } else {
            console.log('\n=== Files in Current Directory ===');
            files.forEach((file, index) => {
                const stats = fs.statSync(file);
                const type = stats.isDirectory() ? '[DIR]' : '[FILE]';
                console.log(`${index + 1}. ${type} ${file}`);
            });
            console.log('==================================\n');
        }
    });
}

// Demonstration: Call all functions in sequence
console.log('Starting File Manager Demonstration...\n');

// Step 1: Create log file
createLogFile();

// Step 2: Create directory
createDirectory();

// Step 3: Append some log entries (with delays to ensure proper sequencing)
setTimeout(() => {
    appendLog('Directory creation completed');
}, 500);

setTimeout(() => {
    appendLog('Listing files in directory');
}, 1000);

setTimeout(() => {
    appendLog('File operations test completed');
}, 1500);

// Step 4: List all files
setTimeout(() => {
    listFiles();
}, 2000);

// Step 5: Read and display all logs
setTimeout(() => {
    readLogs();
}, 2500);

console.log('\nExecuting asynchronous operations...\n');
