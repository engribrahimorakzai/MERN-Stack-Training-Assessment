# Node.js Fundamentals Assessment

**Project Name:** Node Fundamentals Test  
**Version:** 1.0.0  
**Author:** Your name  
**Duration:** Days 1-3 (5 Hours)  
**Total Points:** 100

## 📋 Table of Contents

- [Overview](#overview)
- [Setup Instructions](#setup-instructions)
- [Project Structure](#project-structure)
- [File Descriptions](#file-descriptions)
- [Running the Project](#running-the-project)
- [Testing](#testing)
- [Assumptions](#assumptions)
- [Challenges Faced](#challenges-faced)
- [Key Learnings](#key-learnings)

---

## 🎯 Overview

This project is a comprehensive assessment of Node.js fundamentals covering:

- **Part 1:** Environment Setup & Basic Node.js
- **Part 2:** Core Modules & File System Operations
- **Part 3:** Custom Modules & Module Systems (CommonJS & ES Modules)
- **Part 4:** NPM & Package Management
- **Part 5:** Event Loop & Asynchronous Programming

---

## 🚀 Setup Instructions

### Prerequisites

- Node.js (v14.0.0 or higher recommended)
- npm (comes with Node.js)
- Text editor (VS Code recommended)

### Installation Steps

1. **Clone or download the project folder**
   ```bash
   cd node-assessment
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Create environment variables file**
   ```bash
   # Copy the example file
   copy .env.example .env
   
   # Edit .env and add your actual values
   ```

4. **Verify installation**
   ```bash
   npm start
   ```

---

## 📁 Project Structure

```
node-assessment/
├── node_modules/           # Dependencies (auto-generated)
├── data/                   # Created by fileManager.js
├── package.json            # Project configuration and dependencies
├── package-lock.json       # Locked dependency versions
├── .env                    # Environment variables (NOT committed)
├── .env.example            # Environment variables template
├── .gitignore              # Git ignore rules
├── README.md               # This file
│
├── Part 1: Basic Node.js
│   └── welcome.js          # First Node.js program
│
├── Part 2: Core Modules
│   ├── fileManager.js      # File system operations demo
│   ├── pathUtils.js        # Path module utilities
│   └── activity.log        # Generated log file
│
├── Part 3: Module Systems
│   ├── calculator.js       # Calculator module (CommonJS)
│   ├── mathUtils.js        # Math utilities (CommonJS)
│   ├── main.js             # CommonJS demonstration
│   ├── user.mjs            # User class (ES Module)
│   ├── validator.mjs       # Validation functions (ES Module)
│   └── app.mjs             # ES Module demonstration
│
├── Part 4: NPM & Packages
│   ├── config.js           # Environment configuration
│   ├── styledOutput.js     # Chalk styling utilities
│   ├── index.js            # Main application entry point
│   └── DEPENDENCIES.md     # Package management documentation
│
├── Part 5: Async Programming
│   ├── eventLoopDemo.js           # Event loop demonstration
│   ├── asyncFileHandler.js        # Async patterns comparison
│   ├── errorHandlingTest.js       # Error handling tests
│   ├── EVENT_LOOP_EXPLANATION.md  # Event loop documentation
│   ├── input.txt                  # Test input file
│   ├── input-processed.txt        # Callback output
│   ├── input-processed-promise.txt     # Promise output
│   └── input-processed-async.txt       # Async/await output
```

---

## 📝 File Descriptions

### Part 1: Environment Setup & Basic Node.js (10 points)

#### `welcome.js`
- **Purpose:** First Node.js program
- **Features:**
  - Prints welcome message
  - Displays Node.js version
  - Shows current working directory
- **Run:** `node welcome.js`

---

### Part 2: Core Modules & File System (20 points)

#### `fileManager.js`
- **Purpose:** Demonstrates file system operations
- **Functions:**
  - `createLogFile()` - Creates activity.log (synchronous)
  - `appendLog(message)` - Appends log entries (asynchronous)
  - `readLogs()` - Reads and displays logs (asynchronous)
  - `createDirectory()` - Creates data directory (synchronous)
  - `listFiles()` - Lists current directory files (asynchronous)
- **Run:** `node fileManager.js`

#### `pathUtils.js`
- **Purpose:** Path module utilities
- **Functions:**
  - `getFileExtension(filePath)` - Returns file extension
  - `joinPaths(...segments)` - Joins path segments
  - `getAbsolutePath(filePath)` - Returns absolute path
  - `parseFilePath(filePath)` - Parses path components
- **Run:** `node pathUtils.js`

---

### Part 3: Custom Modules & Module Systems (20 points)

#### CommonJS Modules

**`calculator.js`**
- **Purpose:** Calculator operations (CommonJS)
- **Exports:** add, subtract, multiply, divide, calculate
- **Features:** Division by zero error handling

**`mathUtils.js`**
- **Purpose:** Math utility functions (CommonJS)
- **Exports:** isEven, isOdd, square, cube

**`main.js`**
- **Purpose:** Demonstrates CommonJS modules
- **Features:** 
  - Uses both calculator and mathUtils
  - Error handling demonstrations
  - Combined usage examples
- **Run:** `node main.js`

#### ES Modules

**`user.mjs`**
- **Purpose:** User management (ES Module)
- **Exports:** 
  - User class (named export)
  - createUser function (default export)
- **Methods:** getDetails(), isAdult()

**`validator.mjs`**
- **Purpose:** Input validation (ES Module)
- **Exports:** validateEmail, validateAge, validateName

**`app.mjs`**
- **Purpose:** Demonstrates ES Modules
- **Features:**
  - Creates and validates users
  - Tests valid and invalid data
  - Shows import/export patterns
- **Run:** `node app.mjs`

---

### Part 4: NPM & Package Management (25 points)

#### `config.js`
- **Purpose:** Environment configuration
- **Features:**
  - Loads variables from .env using dotenv
  - Provides default values
  - Masks sensitive data in display()

#### `styledOutput.js`
- **Purpose:** Terminal styling with Chalk
- **Functions:**
  - `displayWelcome()` - Green messages
  - `displayError()` - Red error messages
  - `displayWarning()` - Yellow warnings
  - `displayInfo()` - Blue information
  - `displayMenu()` - Colorful menu
  - Additional helpers for styling
- **Run:** `node styledOutput.js`

#### `index.js`
- **Purpose:** Main application entry point
- **Features:**
  - Integrates all Part 4 components
  - Displays configuration
  - Shows styled output examples
  - Demonstrates NPM package usage
- **Run:** `npm start` or `node index.js`

#### `DEPENDENCIES.md`
- **Purpose:** Package management documentation
- **Content:**
  - Semantic versioning explanation
  - Caret (^) symbol meaning
  - Dependencies vs devDependencies
  - Project dependencies list

---

### Part 5: Event Loop & Async Concepts (25 points)

#### `eventLoopDemo.js`
- **Purpose:** Event loop demonstration
- **Features:**
  - Predicted vs actual output
  - Synchronous vs asynchronous execution
  - Microtasks vs macrotasks
  - Inline documentation
- **Run:** `node eventLoopDemo.js`

#### `EVENT_LOOP_EXPLANATION.md`
- **Purpose:** Detailed event loop documentation
- **Content:**
  - 250+ word explanation
  - Three-phase execution model
  - Priority system explanation
  - Key takeaways

#### `asyncFileHandler.js`
- **Purpose:** Compare async programming patterns
- **Functions:**
  - `processFileCallback()` - Traditional callbacks
  - `processFilePromise()` - Promise-based
  - `processFileAsync()` - Async/await
- **Features:**
  - Reads files asynchronously
  - Converts content to uppercase
  - Writes to new files
  - Comprehensive error handling
  - Detailed comparison and preference
- **Run:** `node asyncFileHandler.js`

#### `errorHandlingTest.js`
- **Purpose:** Test error handling for all async patterns
- **Run:** `node errorHandlingTest.js`

---

## 🏃 Running the Project

### NPM Scripts

```bash
# Start the main application
npm start

# Run with auto-reload (development)
npm run dev

# Run tests
npm test
```

### Individual File Execution

```bash
# Part 1
node welcome.js

# Part 2
node fileManager.js
node pathUtils.js

# Part 3 - CommonJS
node main.js

# Part 3 - ES Modules
node app.mjs

# Part 4
node index.js
node styledOutput.js

# Part 5
node eventLoopDemo.js
node asyncFileHandler.js
node errorHandlingTest.js
```

---

## 🧪 Testing

### Manual Testing Checklist

- [x] Part 1: welcome.js displays correct information
- [x] Part 2: Files created, logs appended, directory listed
- [x] Part 3: CommonJS modules work with proper exports
- [x] Part 3: ES Modules work with default/named exports
- [x] Part 4: Environment variables loaded correctly
- [x] Part 4: Chalk styling displays colors
- [x] Part 5: Event loop output matches prediction
- [x] Part 5: All three async patterns process files
- [x] Error handling works for all async methods

### Error Handling Tests

All functions include proper error handling:
- Try-catch blocks for synchronous operations
- Error-first callbacks for callback pattern
- .catch() for Promise pattern
- Try-catch with async/await

---

## 💭 Assumptions

1. **Node.js Version:** Assumed Node.js v14+ is installed (for ES Modules support)

2. **Module System:** Used `.mjs` extension for ES Modules to avoid configuring `"type": "module"` in package.json, allowing both CommonJS and ES Modules to coexist

3. **Environment Variables:** Assumed development environment, so defaults are provided in config.js

4. **File Paths:** Used relative paths assuming execution from project root directory

5. **Chalk Version:** Installed Chalk 4.1.2 specifically for CommonJS compatibility (v5+ is ESM-only)

6. **Testing:** Assumed manual testing is acceptable; no automated test framework required

7. **Error Messages:** Provided descriptive error messages for debugging purposes

8. **File Encoding:** Used UTF-8 encoding for all file operations

9. **Async Timing:** Used setTimeout delays in demonstrations to ensure proper sequencing for visibility

10. **Documentation:** Assumed inline comments and separate .md files are acceptable for explanations

---

## 🎯 Challenges Faced

### 1. **Module System Compatibility**
   - **Challenge:** Mixing CommonJS and ES Modules in the same project
   - **Solution:** Used `.mjs` extension for ES Modules instead of setting `"type": "module"` in package.json
   - **Learning:** Understanding when to use each module system and their interoperability

### 2. **Chalk Package Version**
   - **Challenge:** Chalk v5+ is ESM-only and doesn't work with CommonJS require()
   - **Solution:** Installed specific version 4.1.2 as specified in requirements
   - **Learning:** Importance of version compatibility when mixing module systems

### 3. **Asynchronous Sequencing**
   - **Challenge:** Demonstrating async operations in a readable order
   - **Solution:** Used setTimeout delays between demonstrations
   - **Learning:** Understanding event loop timing and how to control async flow

### 4. **Event Loop Prediction**
   - **Challenge:** Correctly predicting microtask vs macrotask execution order
   - **Solution:** Studied event loop phases and priority queues
   - **Learning:** Promises (microtasks) always execute before setTimeout (macrotasks)

### 5. **Error Handling Patterns**
   - **Challenge:** Implementing consistent error handling across different async patterns
   - **Solution:** 
     - Callbacks: Error-first callback pattern
     - Promises: .catch() chaining
     - Async/await: try-catch blocks
   - **Learning:** Each pattern has its own best practices for error handling

### 6. **File Path Handling**
   - **Challenge:** Cross-platform path handling (Windows vs Unix)
   - **Solution:** Used Node.js path module for all path operations
   - **Learning:** Always use path.join() and path.resolve() for portability

### 7. **Environment Variable Security**
   - **Challenge:** Managing sensitive data in .env
   - **Solution:** Created .env.example template and added .env to .gitignore
   - **Learning:** Never commit actual environment variables to version control

### 8. **Callback Hell**
   - **Challenge:** Nested callbacks in processFileCallback become hard to read
   - **Solution:** Kept it simple for demonstration, but showed preference for async/await
   - **Learning:** Modern patterns (async/await) significantly improve code readability

---

## 🎓 Key Learnings

1. **Node.js Fundamentals:**
   - Understanding process object and built-in modules
   - File system operations (sync vs async)
   - Module systems and their differences

2. **Asynchronous Programming:**
   - Event loop execution model
   - Microtasks vs macrotasks priority
   - Three async patterns and their trade-offs

3. **Package Management:**
   - Semantic versioning and version ranges
   - Dependencies vs devDependencies
   - Environment variable management

4. **Best Practices:**
   - Proper error handling is essential
   - Code organization and modularity
   - Documentation and comments improve maintainability
   - Using meaningful variable and function names

5. **Modern JavaScript:**
   - ES6+ features (async/await, arrow functions, destructuring)
   - Module import/export patterns
   - Promise-based APIs

---

## 📦 Dependencies

### Production Dependencies
- **dotenv** (^17.2.3) - Environment variable management
- **chalk** (^4.1.2) - Terminal string styling

### Development Dependencies
- **nodemon** (^3.1.11) - Auto-restart on file changes

---

## 📄 License

ISC

---

## 👤 Author

Your name

---

## 🙏 Acknowledgments

- Node.js documentation
- MDN Web Docs for JavaScript reference
- PERN Stack Training Program

---

## 📞 Support

For questions or issues, please refer to the assessment documentation or reach out to the course instructor.

---

**Assessment Completed:** November 20, 2025  
**Total Time:** 5 Hours  
**Parts Completed:** 5/5  
**Status:** ✅ Ready for Submission
#
