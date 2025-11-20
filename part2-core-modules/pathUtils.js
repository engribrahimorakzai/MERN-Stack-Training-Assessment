// pathUtils.js - Path Module Utilities

const path = require('path');

/**
 * Get the file extension of any given file path
 * @param {string} filePath - The file path to analyze
 * @returns {string} - The file extension (e.g., '.js', '.txt')
 */
function getFileExtension(filePath) {
    return path.extname(filePath);
}

/**
 * Join multiple path segments into a single path
 * @param {...string} segments - Path segments to join
 * @returns {string} - The joined path
 */
function joinPaths(...segments) {
    return path.join(...segments);//...segments → Rest parameter
}

/**
 * Get the absolute path of a file
 * @param {string} filePath - The relative or absolute file path
 * @returns {string} - The absolute path
 */
function getAbsolutePath(filePath) {
    return path.resolve(filePath);
}

/**
 * Parse a file path and return an object with directory, filename, and extension
 * @param {string} filePath - The file path to parse
 * @returns {object} - Object containing dir, name, ext, and base
 */
function parseFilePath(filePath) {
    const parsedPath = path.parse(filePath);
    
    return {
        directory: parsedPath.dir,
        filename: parsedPath.name,
        extension: parsedPath.ext,
        fullFilename: parsedPath.base,
        root: parsedPath.root
    };
}

// Export all functions
module.exports = {
    getFileExtension,
    joinPaths,
    getAbsolutePath,
    parseFilePath
};

// Demonstration (if run directly)
if (require.main === module) {
    console.log('=== Path Utils Demonstration ===\n');
    
    // Test 1: Get file extension
    const testPath1 = 'fileManager.js';
    console.log(`1. File Extension of '${testPath1}':`, getFileExtension(testPath1));
    
    // Test 2: Join paths
    const joined = joinPaths('data', 'logs', 'activity.log');
    console.log(`2. Joined Path:`, joined);
    
    // Test 3: Get absolute path
    const absolutePath = getAbsolutePath('welcome.js');
    console.log(`3. Absolute Path of 'welcome.js':`);
    console.log(`   ${absolutePath}`);
    
    // Test 4: Parse file path
    const testPath2 = 'C:\\Users\\User\\Desktop\\PERN Stack Training\\node-assessment\\fileManager.js';
    console.log(`\n4. Parsed Path Components:`);
    const parsed = parseFilePath(testPath2);
    console.log(`   Directory: ${parsed.directory}`);
    console.log(`   Filename: ${parsed.filename}`);
    console.log(`   Extension: ${parsed.extension}`);
    console.log(`   Full Filename: ${parsed.fullFilename}`);
    console.log(`   Root: ${parsed.root}`);
    
    console.log('\n=================================');
}
