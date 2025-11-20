// config.js - Configuration module with environment variables

// Load environment variables from .env file
require('dotenv').config();

/**
 * Configuration object with environment variables and default values
 */
const config = {
    // Application settings
    appName: process.env.APP_NAME || 'Default Node App',
    port: process.env.PORT || 3000,
    
    // Database configuration
    database: {
        host: process.env.DB_HOST || 'localhost',
        user: process.env.DB_USER || 'root'
    },
    
    // API settings
    apiKey: process.env.API_KEY || 'default_api_key',
    
    // Environment
    nodeEnv: process.env.NODE_ENV || 'development',
    
    // Helper method to display configuration (without sensitive data)
    display() {
        return {
            appName: this.appName,
            port: this.port,
            database: {
                host: this.database.host,
                user: this.database.user
            },
            apiKey: this.apiKey ? '***' + this.apiKey.slice(-4) : 'Not set',
            nodeEnv: this.nodeEnv
        };
    }
};

// Export the configuration object
module.exports = config;
