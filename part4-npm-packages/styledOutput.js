// styledOutput.js - Styled console output using Chalk

const chalk = require('chalk');

/**
 * Display a welcome message in green
 * @param {string} message - Welcome message to display
 */
function displayWelcome(message) {
    console.log(chalk.green.bold('✓ ' + message));
}

/**
 * Display an error message in red
 * @param {string} message - Error message to display
 */
function displayError(message) {
    console.log(chalk.red.bold('✗ ERROR: ' + message));
}

/**
 * Display a warning message in yellow
 * @param {string} message - Warning message to display
 */
function displayWarning(message) {
    console.log(chalk.yellow.bold('⚠ WARNING: ' + message));
}

/**
 * Display an info message in blue
 * @param {string} message - Info message to display
 */
function displayInfo(message) {
    console.log(chalk.blue('ℹ INFO: ' + message));
}

/**
 * Display a colorful menu of options
 */
function displayMenu() {
    console.log('\n' + chalk.cyan.bold('═══════════════════════════════════════'));
    console.log(chalk.cyan.bold('         APPLICATION MENU'));
    console.log(chalk.cyan.bold('═══════════════════════════════════════'));
    
    console.log(chalk.white('\nPlease select an option:'));
    console.log(chalk.green('  1. ') + chalk.white('Start Application'));
    console.log(chalk.green('  2. ') + chalk.white('View Configuration'));
    console.log(chalk.green('  3. ') + chalk.white('Run Tests'));
    console.log(chalk.green('  4. ') + chalk.white('Check Dependencies'));
    console.log(chalk.green('  5. ') + chalk.white('View Documentation'));
    console.log(chalk.red('  6. ') + chalk.white('Exit'));
    
    console.log(chalk.cyan.bold('\n═══════════════════════════════════════\n'));
}

/**
 * Display a success message with custom styling
 * @param {string} message - Success message to display
 */
function displaySuccess(message) {
    console.log(chalk.green('✓ SUCCESS: ' + message));
}

/**
 * Display a header with custom styling
 * @param {string} title - Header title to display
 */
function displayHeader(title) {
    const separator = '='.repeat(title.length + 4);
    console.log('\n' + chalk.magenta.bold(separator));
    console.log(chalk.magenta.bold('  ' + title));
    console.log(chalk.magenta.bold(separator) + '\n');
}

/**
 * Display a section divider
 */
function displayDivider() {
    console.log(chalk.gray('─'.repeat(50)));
}

// Export all functions
module.exports = {
    displayWelcome,
    displayError,
    displayWarning,
    displayInfo,
    displayMenu,
    displaySuccess,
    displayHeader,
    displayDivider
};

// Demonstration when run directly
if (require.main === module) {
    console.log('\n' + chalk.bold.underline('Chalk Styling Demonstration') + '\n');
    
    displayWelcome('Welcome to the Node Assessment App!');
    displaySuccess('Application initialized successfully');
    displayInfo('Loading configuration from .env file');
    displayWarning('This is a test warning message');
    displayError('This is a test error message');
    
    displayDivider();
    displayMenu();
    
    displayHeader('Configuration Details');
    console.log(chalk.cyan('App Name: ') + chalk.white('Node Assessment App'));
    console.log(chalk.cyan('Port: ') + chalk.white('3000'));
    console.log(chalk.cyan('Environment: ') + chalk.yellow('Development'));
    
    displayDivider();
    
    console.log('\n' + chalk.gray('End of demonstration\n'));
}
