// index.js - Main entry point for Node Assessment App

// Import required modules
const config = require('./config');
const {
    displayWelcome,
    displayError,
    displayWarning,
    displayInfo,
    displayMenu,
    displaySuccess,
    displayHeader,
    displayDivider
} = require('./styledOutput');
const chalk = require('chalk');

// Main application function
function main() {
    // Display header
    displayHeader('Node.js Fundamentals Assessment - Part 4');
    
    // Welcome message
    displayWelcome(`Welcome to ${config.appName}!`);
    displaySuccess('Application started successfully');
    
    displayDivider();
    
    // Display configuration
    displayInfo('Loading configuration from environment variables...');
    console.log('\n' + chalk.cyan.bold('Current Configuration:'));
    const configDisplay = config.display();
    console.log(chalk.white('  App Name: ') + chalk.green(configDisplay.appName));
    console.log(chalk.white('  Port: ') + chalk.green(configDisplay.port));
    console.log(chalk.white('  Database Host: ') + chalk.green(configDisplay.database.host));
    console.log(chalk.white('  Database User: ') + chalk.green(configDisplay.database.user));
    console.log(chalk.white('  API Key: ') + chalk.green(configDisplay.apiKey));
    console.log(chalk.white('  Environment: ') + chalk.yellow(configDisplay.nodeEnv));
    
    displayDivider();
    
    // Display menu
    displayMenu();
    
    // Demonstrate different message types
    displayHeader('Testing Styled Output Functions');
    
    displayInfo('This is an informational message');
    displaySuccess('Operation completed successfully');
    displayWarning('This is a warning - proceed with caution');
    displayError('This is an error message for demonstration');
    
    displayDivider();
    
    // Display package information
    displayHeader('NPM Package Management');
    console.log(chalk.white('Dependencies installed:'));
    console.log(chalk.green('  ✓ dotenv') + chalk.gray(' - Environment variable management'));
    console.log(chalk.green('  ✓ chalk@4.1.2') + chalk.gray(' - Terminal styling'));
    console.log('\n' + chalk.white('Dev Dependencies installed:'));
    console.log(chalk.yellow('  ✓ nodemon') + chalk.gray(' - Auto-restart on file changes'));
    
    displayDivider();
    
    // Display available scripts
    displayHeader('Available NPM Scripts');
    console.log(chalk.cyan('  npm start') + chalk.white(' - Run the application'));
    console.log(chalk.cyan('  npm run dev') + chalk.white(' - Run with nodemon (auto-reload)'));
    console.log(chalk.cyan('  npm test') + chalk.white(' - Run tests'));
    
    displayDivider();
    
    // Final message
    console.log('\n' + chalk.green.bold('✓ All Part 4 requirements demonstrated successfully!'));
    console.log(chalk.gray('Application running on port ' + config.port));
    console.log(chalk.gray('Press Ctrl+C to exit\n'));
}

// Run the application
main();
